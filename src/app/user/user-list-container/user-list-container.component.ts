import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiService } from '../service/user-api.service';
import { user } from '../user.model';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  public userList$: Observable<user[]>
  constructor(private user_api_service: UserApiService) {
    this.userList$ = new Observable()
  }

  ngOnInit(): void {
    this.userList$ = this.user_api_service.getUserData()
  }

  
/**
 * 
 * @param id 
 */
deleteUserList(id:any){
this.user_api_service.deleteUserData(id).subscribe(()=>{
  confirm("are you sure do you wnat to delete data")
    this.userList$ =  this.user_api_service.getUserData()
})

}

}
