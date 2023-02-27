import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { DataCommunicationService } from '../../service/data-communication.service';
import { UserFormContainerComponent } from '../../user-form-container/user-form-container.component';
import { user } from '../../user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService]
})
export class UserListPresentationComponent {
  /**
   * get the data from database using setter method
   */

  @Input() set userList(res: user[] | null) {

    if (res) {
      this._userList = res
    }
  }

  /**
   * get the data form set method 
   */
  public get userList(): user[] {
    return this._userList
  }

  private _userList!: user[];
  /**
   * create a output to send data in container component
   */
  @Output() public deleteUserData: EventEmitter<number>


  /**
   * 
   * @param _userListPresenterService 
   * @param _cdkOverlayService 
   * @param router 
   * @param _dataCommunicationService 
   */
  constructor(public _userListPresenterService: UserListPresenterService, private _cdkOverlayService: CdkOverlayService, private router: Router, public _dataCommunicationService: DataCommunicationService) {
    this.deleteUserData = new EventEmitter()
    /**
     * get a data form presenter and send it to container using output method
     */
    this._userListPresenterService.deleteData$.subscribe((res: number) => {
      this.deleteUserData.emit(res)
    })

    /**
     * get data from from after update it
     */
    this._dataCommunicationService.updateData$.subscribe((res:user[])=>{
      this._userList = res
      console.log(res);   
    })
  }

  public openOverlay() {
    this._cdkOverlayService.displayOverlay(UserFormContainerComponent)
  }

  /**
   * 
   * @param id 
   */
  public deleteUserList(id: number) {
    this._userListPresenterService.deleteUserList(id)
  }

  /**
   * 
   * @param id 
   */
  public editUserList(id: number) {
   
    this._userListPresenterService.editUser(id)
    console.log(id);
    this._cdkOverlayService.displayOverlay(UserFormContainerComponent);
    this.router.navigate(['/user/edit', id])
  }

  /**
   * 
   * @param id send id into params
   */
  public getUserDetail(id:number){
    this.router.navigate(['/user/detail', id])
  }

}
