import {Component, ElementRef, inject, Injector, input, viewChild} from '@angular/core';
import {Message} from '../../../../../shared/model/user.message';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {Observable} from 'rxjs';
import {WsService} from '../../ws.service';

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
