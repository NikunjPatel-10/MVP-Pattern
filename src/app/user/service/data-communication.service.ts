import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class DataCommunicationService {
  public userId:   BehaviorSubject <any>;
  public userId$: Observable<any>
  public updateData : Subject<any>;
  public updateData$ : Observable<any>;
  public deleteuser : Subject<any>;
  public deleteuser$ : Observable<any>
  // public editData$: Observable<any>
  constructor() {
    this.userId = new BehaviorSubject('');
    this.userId$ = this.userId.asObservable()
    this.updateData = new Subject();
    this.updateData$ = this.updateData.asObservable()
    // this.editData$ = this.editData.asObservable()

    this.deleteuser = new Subject();
    this.deleteuser$ = this.deleteuser.asObservable()
  }
}
