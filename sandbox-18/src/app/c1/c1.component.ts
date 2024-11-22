import {ChangeDetectionStrategy, Component, computed, effect, OnInit, signal, untracked} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {interval} from 'rxjs';
import {C2Component} from '../c2/c2.component';

@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    C2Component
  ],
  templateUrl: './c1.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './c1.component.scss'
})
export class C1Component{

  tab = [1,2,3,4]
  name = signal('Thomas')
  age = signal(39);
  doubleAge = computed(() => this.age() * 2)

  constructor() {
    effect(() => {
      untracked(() => {
        console.log("Age of ", this.name())
      })
      console.log(" have been modified:", this.age())
    }, );
  }

  incrementAge() {
    this.age.update(a => a + 1)
  }

  resetTo30() {
    this.age.set(30)
  }
}
