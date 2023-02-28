import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CdkOverlayService } from 'src/app/core/service/cdk-overlay.service';
import { DataCommunicationService } from '../../service/data-communication.service';
import { user } from '../../user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormPresentationComponent implements OnInit {
  public base64!: any
  public isSubmitted: boolean
  /**
 *  create a output to add a userdata 
 */

  @Output() public addUser: EventEmitter<user>
  @Output() public userId: EventEmitter<number>
  @Output() public editUserData: EventEmitter<any>

  /**
   * get data from container by Input method
   */
  @Input() public set editData(res: user | null) {


    if (res) {
      this._editData = res
      this.userForm.patchValue(this._editData)
      /**
       * to get the profile pic in the user
       */
      this.editProfile = this.base64 ? this.base64 : this._editData.profile
    }
  }

  public get editData(): user {
    return this._editData
  }

  /**
   * cretae a userform for user
   *  */
  public userForm: FormGroup
  /**
   * variables
   */
  public editProfile?: string
  private _editData: any
  public text: string = ''
  /**
   * 
   * @param _userFormPresenterService 
   * @param _cdkOverlayService 
   * @param _dataCommunicationService 
   */
  constructor(private _userFormPresenterService: UserFormPresenterService, private _cdkOverlayService: CdkOverlayService, public _dataCommunicationService: DataCommunicationService, private _changeDetector: ChangeDetectorRef,) {
    this.userForm = this._userFormPresenterService.buildForm()
    this.addUser = new EventEmitter();
    this.userId = new EventEmitter();
    this.editUserData = new EventEmitter()
    this.isSubmitted = false

    console.log(this._editData);
  }

  ngOnInit(): void {
    /**
     * send data in the container component in container using output
     */
    this._userFormPresenterService.userData$.subscribe((res) => {
      if (this._editData) {
        this.editUserData.emit(res)
      }
      this.addUser.emit(res)
    })

    /**
     * subscribe data from datacommunication service and send to the container component using output 
     */
    this._dataCommunicationService.userId$.subscribe((id) => {
      console.log(id);
      if (id) {
        this.userId.emit(id)
      }

    })
  }

  /**
   * to get formcontrol
   */
  public get userFormControl() {
    return this.userForm.controls
  }

  onSelectFile(event: any) {
    this._userFormPresenterService.onSelectFile(event);
    // const a =  this._userFormPresenterService.base64String;
    this._userFormPresenterService.userProfileImage.subscribe((res) => {
      this._changeDetector.markForCheck()
      this.base64 = res;
      console.log(this.base64);

    })
  }

  // to save userData 

  public saveUser() {
    this.isSubmitted = true
    this._userFormPresenterService.submitData(this.userForm);
    this._cdkOverlayService.overlayRef.detach()

  }

  /**
   * to cancel formdata
   */
  public cancelFormData() {
    this._cdkOverlayService.overlayRef.detach()
    this._userFormPresenterService.onCancel()
  }


}
