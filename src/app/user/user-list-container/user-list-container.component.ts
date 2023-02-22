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
  

  constructor(private user_api_service: UserApiService) {
  
  }

  ngOnInit(): void {

  
  }


}
