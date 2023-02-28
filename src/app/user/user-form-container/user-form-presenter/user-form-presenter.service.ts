import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { DataCommunicationService } from '../../service/data-communication.service';
import { user } from '../../user.model';

@Injectable()
export class UserFormPresenterService implements OnInit {
  public userImage!: File;
  public base64String!: any;
  public userProfileImage: Subject<any>
  public userData: Subject<user>;
  public userData$: Observable<user>

  /**
   * 
   * @param formBuilder 
   * @param _dataCommunicationService 
   */
  constructor(private formBuilder: FormBuilder, public _dataCommunicationService: DataCommunicationService) {
    this.userData = new Subject();
    this.userData$ = this.userData.asObservable()
    this.userProfileImage = new Subject()
  }

  ngOnInit(): void {

  }



  /**
   * create a formbuilder for userForm
   * @returns 
   */
  public buildForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(3), Validators.maxLength(15)]],
      address: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern(/^[0-9\s]*$/), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      profile: ['', [Validators.required]]
    })
  }

  /**
   * to select file from local pc 
   * @param event 
   */
  onSelectFile(event: any) {
    this.userImage = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.userImage);
    fileReader.onload = () => {
      this.base64String = fileReader.result
      this.userProfileImage.next(this.base64String)
    }
  }

  /**
   * for save userdata from presentation component
   */
  submitData(userData: FormGroup) {
    userData.controls['profile'].setValue(this.base64String)
    if (userData.valid) {
      this.userData.next(userData.value)
      this._dataCommunicationService.userId.next('')
      userData.reset()
    }
  }

  /**
   * to clear the data when form reset
   */
  onCancel() {
    this._dataCommunicationService.userId.next('')
  }
}
