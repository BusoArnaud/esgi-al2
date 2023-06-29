import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {Router} from "@angular/router";
import {RestaurantApiService} from "../../../services/restaurant-api.service";
import {RestaurantModel} from "../../models/restaurant.model";
import {Observable} from "rxjs";
import {selectRestaurantList} from "../../../store/app.selectors";
import {Store} from "@ngrx/store";


@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  restaurantsSub$: Observable<Array<RestaurantModel>>;

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private store: Store,
  ) {
    this.restaurantsSub$ = this.store.select(selectRestaurantList)
    //this.restaurantsSub$ = this.restaurantService.restaurants$;
  }

  redirectToFormTD() {
    this.router.navigate(['restaurant/formTD']).then()
  }

  redirectToFormRF() {
    this.router.navigate(['restaurant/formRF']).then()
  }

}
