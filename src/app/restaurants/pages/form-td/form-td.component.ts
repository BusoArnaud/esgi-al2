import { Component } from '@angular/core';
import {RestaurantsService} from "../../services/restaurants.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss']
})
export class FormTDComponent {

  restaurantTitle: string = '';
  restaurantDescription: string = '';
  restaurantFood: string = '';

  constructor(
    private restaurantService: RestaurantsService,
    private router: Router
  ) {
  }
  submitRestaurant() {
    console.log(this.restaurantTitle);
    this.restaurantService.addNewRestaurant(
      {title: this.restaurantTitle, desc: this.restaurantDescription, food: [this.restaurantFood]}
    )
  }

  redirectToRestaurants() {
    this.router.navigate(['restaurants']).then()
  }
}
