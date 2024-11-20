import {Component, inject, Injector, Input, OnInit} from '@angular/core';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {PrimeTemplate} from 'primeng/api';
import {Message} from '../../../../../shared/model/user.message';
import {Observable} from 'rxjs';
import {CHANNEL, WsService} from '../../ws.service';

@Component({
  selector: 'app-custom',
  standalone: true,
    imports: [
        CardModule,
        FormsModule,
        PrimeTemplate
    ],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent implements OnInit{

  @Input() channel='DEFAULT'

  messages: Message[] = [];
  username!:string;
  message: any;
  ws$!: Observable<any>

  private ws!:WsService

  ngOnInit(): void {
    const injector = Injector.create({
      providers:[
        WsService,
        {provide:CHANNEL, useValue: this.channel}
      ]
    })
    this.ws = injector.get(WsService)
  }

  connect(): void {
    this.ws.username = this.username;
    this.ws$ = this.ws.getWs()

    this.ws$.subscribe({
      next: (message) => {
        this.messages.push(message)
      },
      error:(error) => {
        console.log('Error:', error)
      }
    })
  }

  sendMessage() {
    this.ws.sendMessage(this.message)
    this.message = ''
  }

  startChat(username :any) {
    this.username = username;
    this.connect()
  }


}
