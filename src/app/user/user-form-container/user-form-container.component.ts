import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataCommunicationService } from '../service/data-communication.service';
import { UserApiService } from '../service/user-api.service';
import { user } from '../user.model';
import { UserFormPresenterService } from './user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent {
  public editData: any
  /**
   * 
   * @param user_api_service 
   * @param router 
   */
  constructor(private user_api_service: UserApiService, private router: Router, public _dataCommunicationService: DataCommunicationService) {

  }



  /**
   * to save userData in database
   * @param Data 
   */
  public saveUserData(Data: user) {

    if (this.editData) {

    }
    this.user_api_service.postUserData(Data).subscribe((res: user) => {
      console.log(res);
      this.router.navigate(['/user/list'])
    })

  }

  public editUserData(id: any) {
    this.user_api_service.getUserById(id).subscribe(res => {
      this.editData = res
      console.log(res);
    })
  }

  public updateUserData(User: user) {
    this.user_api_service.updateUserData(User, this.editData).subscribe((res) => { });

    this.user_api_service.getUserData().subscribe((updateData: user[]) => {
      this._dataCommunicationService.updateData.next(updateData)
    })
  }
}
