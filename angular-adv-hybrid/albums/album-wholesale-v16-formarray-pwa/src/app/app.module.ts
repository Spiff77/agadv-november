import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AlbumListComponent} from './components/albums/album-list/album-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './components/dialog/cart/cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from './components/dialog/album/add/add.component';
import {DetailComponent} from './components/dialog/album/detail/detail.component';
import { CommentsComponent } from './components/albums/comments/comments.component';
import {MatChipsModule} from '@angular/material/chips';
import {AlbumAddComponent} from './components/albums/album-add/album-add.component';
import {
  CustomDescriptionComponent
} from './components/albums/album-add/custom-description/custom-description.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import { ServiceWorkerModule } from '@angular/service-worker';

const routes: Routes = [
  {path: 'shop', component: AlbumListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AlbumAddComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
    declarations: [
        AppComponent,
        AlbumListComponent,
      AlbumAddComponent,
      CustomDescriptionComponent,
        CartComponent,
        HomeComponent,
        AddComponent,
        DetailComponent,
        CommentsComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatBadgeModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
    providers: [],
    exports: [
        CommentsComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
