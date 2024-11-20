import {Component, inject} from '@angular/core';
import {NameService} from '../name.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.scss'],
  providers: [NameService]

})
export class P1Component {

  public ns = inject(NameService)

  changeName() {
    this.ns.name = "Pierre"
  }

}
