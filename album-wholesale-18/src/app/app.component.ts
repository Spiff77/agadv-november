import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {MatDialog} from '@angular/material/dialog';
import {AlbumCart} from './store/cart/cart.reducer';
import {Observable} from 'rxjs';
import {aselectAlbumQuantity, selectAlbums} from './store/cart/cart.selectors';
import {Album} from './model/album.model';
import {addAlbum, removeAlbum} from './store/cart/cart.actions';
import {CartComponent} from './components/dialog/cart/cart.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AsyncPipe, NgForOf} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCard, MatCardModule, MatButtonModule, MatIconModule, MatToolbarModule, MatBadgeModule, MatSidenavModule, AsyncPipe, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
