import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { DataCommunicationService } from '../../service/data-communication.service';
import { user } from '../../user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit {

  /**
 *  create a output to add a userdata 
 */

  @Output() public addUser: EventEmitter<user>
  @Output() public editUser: EventEmitter<user>
  @Output() public editUserData: EventEmitter<any>

  /**
   * get data from container by Input method
   */
  @Input() public set editData(res: any | null) {
    
    
    if (res) {
      this._editData = res
      this.userForm.patchValue(this._editData)
    }
  }

  public get editData(): any {
    return this._editData
  }

  /**
   * cretae a userform for user
   *  */
  public userForm: FormGroup
  private _editData: any
public text :string = ''
  /**
   * 
   * @param _userFormPresenterService 
   * @param _cdkOverlayService 
   * @param _dataCommunicationService 
   */
  constructor(private _userFormPresenterService: UserFormPresenterService, private _cdkOverlayService: CdkOverlayService, public _dataCommunicationService: DataCommunicationService) {
    this.userForm = this._userFormPresenterService.buildForm()
    this.addUser = new EventEmitter();
    this.editUser = new EventEmitter();
    this.editUserData = new EventEmitter()


    console.log(this.editData);

  }

  ngOnInit(): void {
    /**
     * send data in the container component in container using output
     */
    this._userFormPresenterService.userData$.subscribe((res) => {
      if(this._editData){
        this.editUserData.emit(res)
      }
      this.addUser.emit(res)
    })

    /**
     * subscribe data from datacommunication service and send to the container component using output 
     */
    this._dataCommunicationService.editData.subscribe((res) => {
      console.log(res);
      if(res){
        this.editUser.emit(res)
      }
      this.text = (res)?'Submit': 'Update'
    })


  }

  // to save userData 

  public saveUser() {
    this._userFormPresenterService.submitData(this.userForm);
    this._cdkOverlayService.overlayRef.detach()
  }

  /**
   * to cancel formdata
   */
  public cancelFormData() {
    this._cdkOverlayService.overlayRef.detach()
  }


}
