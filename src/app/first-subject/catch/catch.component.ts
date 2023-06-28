import {Component, OnDestroy} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstSubjectService} from "../first-subject.service";
import {map, Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-catch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss']
})
export class CatchComponent {


  counter$: Observable<number>

  constructor(
    private firstSubjectService: FirstSubjectService,
  ) {
    this.counter$ = this.firstSubjectService.counter$
      .pipe(
        map((val: number) => val + 7)
      )
  }

}
