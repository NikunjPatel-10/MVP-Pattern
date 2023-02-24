import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from '../../user.model';

@Component({
  selector: 'app-user-detail-presentation',
  templateUrl: './user-detail-presentation.component.html',
  styleUrls: ['./user-detail-presentation.component.scss']
})
export class UserDetailPresentationComponent implements OnInit {
  private _userDetail: any
  public id: any

  @Input() public set userDetail(res: user | null) {


    if (res) {
      this._userDetail = res
    }
  }

  public get userDetail(): user {
    return this._userDetail
  }

  constructor() {
  
 
  }


  ngOnInit(): void {
   
  }


}
