import {Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterState} from './store/counter/counter.reducer';
import {Observable} from 'rxjs';
import {selectCounterName} from './store/counter/counter.selector';

type Person = {id: number, fname: string, age: number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-ngrx';
  private store = inject(Store<{counter: CounterState}>)
  countername$: Observable<string> = this.store.select(selectCounterName)


  p: Person = {id: 10, fname: 'Jean', age:20}
  t = [10,20,30]

  constructor() {
    const p2 = {...this.p, fname: 'Jerome'}
    const t2 = [...this.t, 40]
    console.log(p2)
  }


}
