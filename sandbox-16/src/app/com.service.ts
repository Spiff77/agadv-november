import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  public mes$ = new BehaviorSubject('toto')

  constructor() { }

}
