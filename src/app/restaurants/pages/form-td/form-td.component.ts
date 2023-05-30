import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RestaurantsService} from "../../services/restaurants.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTDComponent {

  restaurantTitle: string = '';
  restaurantDescription: string = '';
  restaurantFood: string = '';

  alreadyExist = false;

  constructor(
    private restaurantService: RestaurantsService,
    private router: Router
  ) {
  }
  submitRestaurant() {
    if (this.restaurantService.canCreateRestaurant(this.restaurantTitle) < 0 ) {
      this.restaurantService.addNewRestaurant(
        {title: this.restaurantTitle, desc: this.restaurantDescription, food: [this.restaurantFood]}
      );
    } else {
      this.alreadyExist = true;
    }
  }

  redirectToRestaurants() {
    this.router.navigate(['restaurants']).then()
  }
}
