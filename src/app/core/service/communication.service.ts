import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
click:Subject<any>
  constructor() {
    this.click=new Subject()
   }
}
