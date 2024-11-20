import {AfterViewChecked, AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {NameService} from './name.service';
import {ComService} from './com.service';
import {
  concat,
  concatMap,
  exhaustMap,
  fromEvent,
  interval,
  mergeMap,
  Observable,
  switchMap,
  takeUntil,
  takeWhile
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked{
  title = 'sandbox-16';

  public ns = inject(NameService)
  public cs = inject(ComService)

  evenObs$!: Observable<any>;

  @ViewChild('clickBox')
  btn!: ElementRef


  changeName() {
    this.ns.name = "Pierre"
  }

  sendName() {
    this.cs.mes$.next(this.ns.name)
  }

  ngAfterViewChecked(): void {
    if(!this.evenObs$){
      this.evenObs$ =  fromEvent(this.btn.nativeElement, 'click').pipe(
        exhaustMap(v => {
          return interval(500).pipe(takeWhile(w => w <= 5))
        }
        )
      )
      this.evenObs$.subscribe(v => console.log(v))
    }
  }

}
