import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { UserFormContainerComponent } from '../../user-form-container/user-form-container.component';
import { user } from '../../user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders:[UserListPresenterService]
})
export class UserListPresentationComponent {


private _userList!:user[]
  constructor(public presenterService: UserListPresenterService, private cdkservice: CdkOverlayService, private router:Router) {

  }

 public  openOverlay() {
  this.cdkservice.displayOverlay(UserFormContainerComponent) 
  }

}
