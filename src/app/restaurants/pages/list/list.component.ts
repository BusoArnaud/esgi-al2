import { Component } from '@angular/core';
import {RestaurantsService} from "../../services/restaurants.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  restaurants: Array<{id: number; title: string; desc: string; food: Array<string>}> = [];

  constructor(
    private restaurantsService: RestaurantsService,
    private router: Router,
  ) {
    this.restaurants = restaurantsService.getRestaurants();
  }

  redirectToFormTD() {
    this.router.navigate(['restaurants/formTD']).then()
  }

}
