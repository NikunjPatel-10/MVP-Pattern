import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { user } from '../../user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit{

  // create a output to add a userdata 
  @Output() public addUser:EventEmitter<user>

  // cretae a userform for user 
  public userForm: FormGroup

  /**
   * 
   * @param userForm_presenter_Service 
   */
  constructor(private userForm_presenter_Service: UserFormPresenterService) {
    this.userForm = this.userForm_presenter_Service.buildForm()
    this.addUser = new EventEmitter()
  }

  ngOnInit(): void {
    this.userForm_presenter_Service.userData$.subscribe((res)=>{
      this.addUser.emit(res)
    })
  }

// to save userData 

  public saveUser(){
    this.userForm_presenter_Service.submitData(this.userForm)
  }

}
