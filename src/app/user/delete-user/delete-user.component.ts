import { Component, OnInit } from '@angular/core';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { DataCommunicationService } from '../service/data-communication.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit{
public delete:boolean;
public cancel:boolean;
  constructor(private _datacommunicationService:DataCommunicationService, private _cdkOverlayService:CdkOverlayService){
this.delete = true;
this.cancel = false
  }

  ngOnInit(): void {
    
  }

  /**
   * to delete data using delete pop up
   */
deleteData(){
  this._datacommunicationService.deleteuser.next(this.delete);
  this._cdkOverlayService.overlayRef.detach()
}

/**
 * to cancel data from delete item
 */
cancelData(){
 this._cdkOverlayService.overlayRef.detach()
}
}
