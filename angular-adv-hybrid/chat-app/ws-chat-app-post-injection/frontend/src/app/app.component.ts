import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from 'primeng/button';
import {webSocket} from 'rxjs/webSocket';
import {WsService} from './ws.service';
import {Observable} from 'rxjs';
import {Message} from '../../../shared/model/user.message';
import {GeneralComponent} from './chat/general/general.component';
import {MusicComponent} from './chat/music/music.component';
import {CustomchatComponent} from './chat/customchat/customchat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, GeneralComponent, MusicComponent, CustomchatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
