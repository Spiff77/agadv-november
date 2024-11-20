import {Component, ElementRef, inject, Injector, input, viewChild} from '@angular/core';
import {Message} from '../../../../../shared/model/user.message';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    FormsModule,
    CardModule
  ],
  providers:[
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  messages: Message[] = [];
  username!:string;

  message: any;

  connect(): void {
  }

  startChat(username :any) {
    this.username = username;
    this.connect()
  }

  sendMessage() {
    this.message = ''
  }

}
