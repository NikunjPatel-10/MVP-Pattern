import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from '../service/user-api.service';
import { user } from '../user.model';

@Component({
  selector: 'app-user-detail-container',
  templateUrl: './user-detail-container.component.html',
  styleUrls: ['./user-detail-container.component.scss']
})
export class UserDetailContainerComponent implements OnInit {
  public id!: number
  public userDetail: any
  constructor(private _userApiService: UserApiService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    /**get data from params using activated route */
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']
      console.log(this.id);

    })

    this._userApiService.getUserById(this.id).subscribe(res => {
      console.log(res);
      this.userDetail = res
    })
  }


  /**
   * get data using get data by id method
   */


}
