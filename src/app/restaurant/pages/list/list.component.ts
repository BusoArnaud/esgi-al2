import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {Router} from "@angular/router";
import {ServiceApiService} from "../../../services/service-api.service";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  restaurants: Array<{id: number; title: string; desc: string; food: Array<string>}> = [];

  constructor(
    private restaurantsService: RestaurantService,
    private router: Router,
    private serviceApi: ServiceApiService
  ) {
    this.restaurants = restaurantsService.getRestaurants();
    this.serviceApi.getMock().subscribe(data => console.log(data));
  }

  redirectToFormTD() {
    this.router.navigate(['restaurant/formTD']).then()
  }

  redirectToFormRF() {
    this.router.navigate(['restaurant/formRF']).then()
  }

}
