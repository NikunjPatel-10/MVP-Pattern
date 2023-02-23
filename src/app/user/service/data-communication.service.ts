import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class DataCommunicationService {
  public editData:   BehaviorSubject <any>;
  public updateData : Subject<user[]>;
  public updateData$ : Observable<user[]>;
  // public editData$: Observable<any>
  constructor() {
    this.editData = new BehaviorSubject(0);
    this.updateData = new Subject();
    this.updateData$ = this.updateData.asObservable()
    // this.editData$ = this.editData.asObservable()
  }
}
