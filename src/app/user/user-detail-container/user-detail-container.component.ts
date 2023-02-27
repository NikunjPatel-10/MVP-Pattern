import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '../service/user-api.service';

@Component({
  selector: 'app-user-detail-container',
  templateUrl: './user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.scss']
})
export class UserDetailContainerComponent implements OnInit{
public userDetail:any
public id!:number
constructor(private activatedRoute:ActivatedRoute, private _userApiService:UserApiService){

  this.activatedRoute.params.subscribe((params)=>{
this.id = params['id']
  })

}

ngOnInit(): void {
  /**
   * get user by id from the params
   */
  this._userApiService.getUserById(this.id).subscribe(res=>{
    console.log(res); 
    this.userDetail = res
  })
}
}
