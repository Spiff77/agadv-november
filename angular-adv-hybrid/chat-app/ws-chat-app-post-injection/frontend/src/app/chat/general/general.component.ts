import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {CHANNEL, WsService} from '../../ws.service';
import {Message} from '../../../../../shared/model/user.message';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [
    FormsModule,
    CardModule
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent{
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
