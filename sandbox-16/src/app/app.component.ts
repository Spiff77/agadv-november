import {Component, inject, OnInit} from '@angular/core';
import {NameService} from './name.service';
import {ComService} from './com.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'sandbox-16';

  public ns = inject(NameService)
  public cs = inject(ComService)

  changeName() {
    this.ns.name = "Pierre"
  }

  sendName() {
    this.cs.mes$.next(this.ns.name)
  }
}
