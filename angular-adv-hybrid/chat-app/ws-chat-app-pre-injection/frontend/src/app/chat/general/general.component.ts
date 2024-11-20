import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Message} from '../../../../../shared/model/user.message';
import {CardModule} from 'primeng/card';
import {WsService} from '../../ws.service';
import {Observable} from 'rxjs';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

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
  username!:string;
  message: any;
  ws$!: Observable<any>

  private ws = inject(WsService)

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
