import { Component } from '@angular/core';
import { CommunicationService } from '../service/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private communication:CommunicationService){

  }

}
