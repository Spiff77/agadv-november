import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {AlbumCart, CartService} from '../../../services/cart.service';
import {interval, map, mergeMap, Subject, takeWhile} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartservice = inject(CartService);
  cart:AlbumCart[] = this.cartservice.cartAlbums;
  displayedColumns: string[] = ['id', 'name', 'artist', 'price', 'quantity', 'totalprice'];

  cd = inject(ChangeDetectorRef)


  startProcess$ = new Subject<number>()
  process$ = interval(400).pipe(
    takeWhile(v => (v*10) <= 100 ),
  );
  processProgression = 0;
  processId = 0

  ngOnInit() {
    this.startProcess$.pipe(
      mergeMap(id => {
        return this.process$.pipe(map(v => {
          this.processProgression =  v == 0 ? 1 : (v*10);
          return {id, progression: v*10}
        }),
        )}),
    ).subscribe(v => {
      this.processId = v.id
      this.processProgression = v.progression
      this.cd.detectChanges()
    })
  }

  process() {
    const processid = Math.round(Math.random()*1000000000);
    this.startProcess$.next(processid);
  }
}
