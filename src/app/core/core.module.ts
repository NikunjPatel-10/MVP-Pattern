import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkOverlayService } from './service/cdk-overlay.service';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  exports:[HeaderComponent,SidebarComponent],

  providers:[CdkOverlayService]
})
export class CoreModule { }
