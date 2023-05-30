import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RestaurantsService} from "../../services/restaurants.service";

@Component({
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnDestroy {

  private routeSub: Subscription;

  dishes: Array<string> = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
  ) {
    this.routeSub = route.params.subscribe(params => this.dishes = restaurantsService.getFood(params['id']));
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  backWithRouter(): void {
    this.router.navigate(['/list']).then();
  }
}
