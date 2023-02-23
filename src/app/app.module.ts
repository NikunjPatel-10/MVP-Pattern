import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import {HttpClientModule} from '@angular/common/http'
import { DataCommunicationService } from './user/service/data-communication.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    HttpClientModule,
  ],
  providers: [DataCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
