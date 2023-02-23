import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { DataCommunicationService } from '../../service/data-communication.service';
import { UserFormContainerComponent } from '../../user-form-container/user-form-container.component';

@Injectable()
export class UserListPresenterService {
  public deleteData: Subject<number>
  public deleteData$: Observable<number>
  constructor(private dataCommunication:DataCommunicationService) {
    this.deleteData = new Subject(),
      this.deleteData$ = this.deleteData.asObservable()
  }


  /**
   *to delete userlist using subject and pass to presentation component 
   * @param id 
   */
deleteUserList(id:number){
this.deleteData.next(id)
}
editUser(id:number){
this.dataCommunication.editData.next(id)
}
}
