import {Component, inject, OnInit} from '@angular/core';
import {NameService} from '../name.service';
import {ComService} from '../com.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']

})
export class C1Component implements OnInit{

  public ns = inject(NameService)
  public cs = inject(ComService)

  public count = 0

  ngOnInit(): void {}


  listenParent() {
    this.cs.mes$.subscribe(v => {
      console.log(`Name a ete appele ${++this.count} fois`)
    })
  }
}
