import { Component } from '@angular/core';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { UserFormContainerComponent } from '../../user-form-container/user-form-container.component';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders:[UserListPresenterService]
})
export class UserListPresentationComponent {

  constructor(public presenterService: UserListPresenterService, private cdkservice: CdkOverlayService) {
  }

 public  openOverlay() {
  this.cdkservice.displayOverlay(UserFormContainerComponent)
  }
}
