import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../service/user-api.service';
import { user } from '../user.model';
import { UserFormPresenterService } from './user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent {
  
/**
 * 
 * @param user_api_service 
 * @param router 
 */
  constructor(private user_api_service: UserApiService, private router: Router) {

  }



  /**
   * to save userData in database
   * @param Data 
   */
  public saveUserData(Data: user) {
    this.user_api_service.postUserData(Data).subscribe((res: user) => {
      console.log(res);
      this.router.navigate(['/user/list'])
    })

  }
}
