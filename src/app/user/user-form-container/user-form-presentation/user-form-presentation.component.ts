import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent {
  public userForm: FormGroup
  constructor(private userForm_presenter_Service: UserFormPresenterService) {
    this.userForm = this.userForm_presenter_Service.buildForm()
  }


  public saveUser(){
    this.userForm_presenter_Service.submitData(this.userForm)
  }
}
