import {Component, inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CartComponent} from './components/dialog/cart/cart.component';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Album} from './model/album.model';
import {AddComponent} from './components/dialog/album/add/add.component';
import {Store} from '@ngrx/store';
import {addAlbum, removeAlbum} from './store/cart/cart.actions';
import {AlbumCart, CartState} from './store/cart/cart.reducer';
import {aselectAlbumQuantity, selectAlbums} from './store/cart/cart.selectors';
import {Observable} from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatDrawerContainer, MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
import { MatBadge } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
  imports: [MatCard, MatCardContent, MatToolbar, MatIconButton, MatIcon, MatBadge, MatDrawerContainer, MatDrawer, MatDrawerContent, RouterOutlet, AsyncPipe, RouterLink]
})
export class AppComponent implements OnInit {

  cartStore = inject(Store);

  totalAlbums$ = this.cartStore.select(aselectAlbumQuantity);
  dialogService = inject(MatDialog);
  router = inject(Router);
  currentRoute: string = ''
  cart:AlbumCart[] = [];
  cart$!:Observable<AlbumCart[]>;


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.split('/').pop() || '';
      }
    })
    this.cart$ = this.cartStore.select(selectAlbums())
    this.cartStore.select('cartstore').subscribe(cartstore => {
      this.cart = cartstore.albums;
    })
  }

  openCart() {
    this.dialogService.open(CartComponent);
  }

  addOneInCart(album: Album) {

    //this.cartService.add(album);
    this.cartStore.dispatch(addAlbum({album}));
  }

  removeOneInCart(album: Album) {
    //this.cartService.remove(album);
    this.cartStore.dispatch(removeAlbum({album}));
  }

}
