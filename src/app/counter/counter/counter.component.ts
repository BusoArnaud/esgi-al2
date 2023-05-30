import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  counter: number = 0;

  add(): void {
    this.counter++;
  }

  minus(): void {
    this.counter--;
  }

  clear(): void {
    this.counter = 0;
  }

}
