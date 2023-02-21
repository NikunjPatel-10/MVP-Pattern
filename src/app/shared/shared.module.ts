import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipe/search.pipe';



@NgModule({
  declarations: [
    SearchPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
