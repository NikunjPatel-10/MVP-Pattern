import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { UserDetailContainerComponent } from './user-detail-container/user-detail-container.component';
import { UserDetailPresentationComponent } from './user-detail-container/user-detail-presentation/user-detail-presentation.component';
import { UserListPresenterService } from './user-list-container/user-list-presenter/user-list-presenter.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserApiService } from './service/user-api.service';
import { DataCommunicationService } from './service/data-communication.service';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        UserComponent,
        UserFormContainerComponent,
        UserFormPresentationComponent,
        UserListContainerComponent,
        UserListPresentationComponent,
        UserDetailContainerComponent,
        UserDetailPresentationComponent,
    ],
    providers: [UserApiService],
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ]
})
export class UserModule { }
