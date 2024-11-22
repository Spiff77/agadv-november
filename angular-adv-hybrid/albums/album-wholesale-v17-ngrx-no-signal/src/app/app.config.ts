import {importProvidersFrom, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from './store/cart/cart.reducer';
import {albumReducer} from './store/album/album.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AlbumEffect} from './store/album/album.effect';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MatChipsModule} from '@angular/material/chips';
import {NgOptimizedImage} from '@angular/common';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter, Routes} from '@angular/router';
import {AlbumListComponent} from './components/albums/album-list/album-list.component';
import {HomeComponent} from './components/home/home.component';
import {AlbumAddComponent} from './components/albums/album-add/album-add.component';

const routes: Routes = [
  {path: 'shop', component: AlbumListComponent},
  {path: 'add', component: AlbumAddComponent},
  {path: 'home', component: HomeComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
];

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule, MatProgressBarModule, MatTableModule, MatToolbarModule, MatDialogModule, MatBadgeModule, MatSidenavModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatIconModule, StoreModule.forRoot({ cartstore: cartReducer, albumstore: albumReducer }, {}), EffectsModule.forRoot([AlbumEffect]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }), MatChipsModule, NgOptimizedImage),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
}
