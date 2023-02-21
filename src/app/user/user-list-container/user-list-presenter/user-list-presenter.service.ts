import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { UserFormContainerComponent } from '../../user-form-container/user-form-container.component';

@Injectable()
export class UserListPresenterService {
  public overlay: Subject<any>
  public overlay$: Observable<any>
  constructor() {
    this.overlay = new Subject(),
      this.overlay$ = this.overlay.asObservable()
  }



}
