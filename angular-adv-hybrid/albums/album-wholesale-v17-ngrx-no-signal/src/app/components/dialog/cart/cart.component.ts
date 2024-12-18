import {Component, inject, OnInit} from '@angular/core';
import {Album} from '../../../model/album.model';
import {concatMap, finalize, interval, map, mergeMap, of, Subject, switchAll, switchMap, takeWhile, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {AlbumCart, CartState} from '../../../store/cart/cart.reducer';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { DecimalPipe } from '@angular/common';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    standalone: true,
    imports: [MatDialogContent, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatProgressBar, MatDialogActions, MatButton, MatDialogClose, DecimalPipe]
})
export class CartComponent implements OnInit {

  cart:AlbumCart[] = [];
  cartStore = inject(Store<{ cartstore: CartState }>); //AFTER

  displayedColumns: string[] = ['id', 'name', 'artist', 'price', 'quantity', 'totalprice'];

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
    })

    this.cartStore.select("cartstore").subscribe(cartstore => {
      this.cart = cartstore.albums;
    })
  }

  process() {
    const processid = Math.round(Math.random()*1000000000);
    this.startProcess$.next(processid);
  }
}
