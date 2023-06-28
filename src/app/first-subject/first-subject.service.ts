import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirstSubjectService {

  counter = 0;
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(this.counter);

  add() {
    this.counter +=1;
    console.log(this.counter);
    this.counter$.next(this.counter);
  }
}
