import {Component, ElementRef, inject, Injector, input, viewChild} from '@angular/core';
import {Message} from '../../../../../shared/model/user.message';
import {Observable} from 'rxjs';
import {CHANNEL, WsService} from '../../ws.service';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {PrimeTemplate} from 'primeng/api';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    PrimeTemplate
  ],
  providers:[
    WsService,
    { provide: CHANNEL, useValue: 'MUSIC' }
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  messages: Message[] = [];
  username!:string
  ws$!: Observable<any>

  private ws:WsService = inject(WsService);
  message: any;

  connect(): void {
    this.ws.username = this.username;
    this.ws$ = this.ws.getWs()
    this.ws$.subscribe({
      next: (message) => {
        this.messages.push(message);
      },
      error: (error) => {
        console.error('Error', error);
      }
    })
  }

  sendMessage() {
    this.ws.sendMessage(this.message);
    this.message = ''
  }

  startChat(username :any) {
    this.username = username;
    this.connect()
  }
}
