import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail-presentation',
  templateUrl: './user-detail-presentation.component.html',
  styleUrls: ['./user-detail-presentation.component.scss']
})
export class UserDetailPresentationComponent implements OnInit{

  /**
   * get the data from the container using setter and getter method
   */
@Input() set userDetail(res:any | null){

  if(res){
this._userDetail = res
  }
}


public get userDetail():any{
  return this._userDetail
}

private _userDetail:any
  constructor(){

  }

  ngOnInit(): void {
    
  }
}
