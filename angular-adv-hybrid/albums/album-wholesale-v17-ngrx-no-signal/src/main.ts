import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app/app.component';
import { NgOptimizedImage } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AlbumEffect } from './app/store/album/album.effect';
import { EffectsModule } from '@ngrx/effects';
import { albumReducer } from './app/store/album/album.reducer';
import { cartReducer } from './app/store/cart/cart.reducer';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './app/components/home/home.component';
import { AlbumListComponent } from './app/components/albums/album-list/album-list.component';
import { provideRouter, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AlbumAddComponent} from './app/components/albums/album-add/album-add.component';

const routes: Routes = [
  {path: 'shop', component: AlbumListComponent},
  {path: 'add', component: AlbumAddComponent},
  {path: 'home', component: HomeComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
];
bootstrapApplication(AppComponent,appConfig)
  .catch(err => console.error(err));
