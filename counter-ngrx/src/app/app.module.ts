import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterComponent } from './counter/counter.component';
import {counterReducer} from './store/counter/counter.reducer';
import { CounterFormComponent } from './counter-form/counter-form.component';
import {FormsModule} from '@angular/forms';
import { CounterNameComponent } from './counter-name/counter-name.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterFormComponent,
    CounterNameComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
