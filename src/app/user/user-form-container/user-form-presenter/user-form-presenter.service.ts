import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { DataCommunicationService } from '../../service/data-communication.service';
import { user } from '../../user.model';

@Injectable()
export class UserFormPresenterService {
  public userImage!:File;
  public base64String!:string;
  public userProfileImage:Subject<any>
  public userData: Subject<user>;
  public userData$: Observable<user>

  /**
   * 
   * @param formBuilder 
   */
  constructor(private formBuilder: FormBuilder, public _dataCommunicationService: DataCommunicationService) {
    this.userData = new Subject();
    this.userData$ = this.userData.asObservable()
    this.userProfileImage = new Subject()
  }



  /**
   * create a formbuilder for userForm
   * @returns 
   */
  public buildForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      profile:['']
    })
  }

  /**
   * to select file from local pc 
   * @param event 
   */
  onSelectFile(event:any){
this.userImage= event.target.File[0];

const fileReader = new FileReader();

fileReader.readAsDataURL(this.userImage);
 
fileReader.onload = ()=>{
  this.base64String = String(fileReader.result)
  this.userProfileImage.next(this.base64String)
}
  }

  /**
   * for save userdata from presentation component
   */
  submitData(userData: FormGroup) {
    userData.controls['profile'].setValue(this.base64String)
    this.userData.next(userData.value)
    this._dataCommunicationService.userId.next('')
  }

  /**
   * to clear the data when form reset
   */
  onCancel() {
    this._dataCommunicationService.userId.next('')
  }
}
