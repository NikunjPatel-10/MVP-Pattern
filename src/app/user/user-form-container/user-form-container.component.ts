import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataCommunicationService } from '../service/data-communication.service';
import { UserApiService } from '../service/user-api.service';
import { user } from '../user.model';
import { UserFormPresenterService } from './user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit{
  public editData$: Observable<any>
  public updateData :any
  public id:any
  /**
   * 
   * @param user_api_service 
   * @param router 
   */
  constructor(private user_api_service: UserApiService, private router: Router, public _dataCommunicationService: DataCommunicationService) {
  this.editData$ = new Observable()
  }

ngOnInit(): void {
  this.getData()
}

  /**
   * to save userData in database
   * @param Data 
   */
  public saveUserData(userForm: user) {
    this.user_api_service.postUserData(userForm).subscribe((res: user) => {
      console.log(res);
      this.router.navigate(['/user/list'])
    })

  }

  /**
   * get userdata from the id
   * @param id 
   */
  public editUserData(id: number) {
    this.id = id
    this.editData$ = this.user_api_service.getUserById(this.id)
  }

  /**
   * to update the user data
   * @param User 
   */
  public updateUserData(User: user) {
    this.user_api_service.updateUserData(User, this.id).subscribe(() => { 
      this.getData()
      this.router.navigate(['/user/list'])
     });
     
  }

  public  getData(){
    this.user_api_service.getUserData().subscribe((updateData: user[]) => {
      this._dataCommunicationService.updateData.next(updateData)    
    })
   }
}
