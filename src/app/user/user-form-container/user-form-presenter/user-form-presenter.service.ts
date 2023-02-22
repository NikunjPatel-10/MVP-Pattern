import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { user } from '../../user.model';

@Injectable()
export class UserFormPresenterService {
  public userData: Subject<user>;
  public userData$: Observable<user>

  /**
   * 
   * @param formBuilder 
   */
  constructor(private formBuilder: FormBuilder) {
    this.userData = new Subject();
    this.userData$ = this.userData.asObservable()
  }


  // create a formbuilder for userForm

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      email: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthDate: ['', [Validators.required]]
    })
  }

// for save userdata from presentation component

  submitData(userData: FormGroup) {
    this.userData.next(userData.value)
  }
}
