import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailsComponent {

  dishes: Array<string>;
  constructor(
    private router: Router
  ) {
    this.dishes = history.state.data;
    console.log(this.dishes);
  }

  backWithHistory(): void {
    history.back();
  }

  backWithRouter(): void {
    this.router.navigate(['/list']).then();
  }
}
