import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { user } from '../../user.model';

@Injectable()
export class UserFormPresenterService {
  public userData: Subject<user>;
  public userData$: Observable<user>
  constructor(private formBuilder: FormBuilder) {
    this.userData = new Subject();
    this.userData$ = this.userData.asObservable()
  }

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


  submitData(userData: FormGroup) {
    this.userData.next(userData.value)
  }
}
