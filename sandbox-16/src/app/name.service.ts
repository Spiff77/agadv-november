import { Injectable } from '@angular/core';
import {AppModule} from './app.module';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  public name = 'Bilge'

  constructor() { }
}
