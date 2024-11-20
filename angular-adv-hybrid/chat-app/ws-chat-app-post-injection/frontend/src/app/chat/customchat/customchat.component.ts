import {Component, inject, Injector, input, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {PrimeTemplate} from 'primeng/api';
import {Message} from '../../../../../shared/model/user.message';
import {Observable} from 'rxjs';
import {CHANNEL, WsService} from '../../ws.service';


@Component({
  selector: 'app-customchat',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    PrimeTemplate
  ],
  templateUrl: './customchat.component.html',
  styleUrl: './customchat.component.scss'
})
export class CustomchatComponent implements OnInit {
  messages: Message[] = [];
  username!:string
  ws$!: Observable<any>

  private ws!:WsService;
  message: any;
  channel = input.required<string>()

  ngOnInit(): void {
    const injector = Injector.create({providers: [{provide: WsService}, {provide: CHANNEL, useValue: this.channel()}]});
    this.ws = injector.get(WsService);
  }
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
