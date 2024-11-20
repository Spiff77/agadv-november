import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import {NameService} from './name.service';
import { SuperformComponent } from './superform/superform.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    P2Component,
    C1Component,
    C2Component,
    SuperformComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
