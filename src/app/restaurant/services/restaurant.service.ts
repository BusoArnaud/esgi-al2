import { Injectable } from '@angular/core';
import {RestaurantApiService} from "../../services/restaurant-api.service";
import {BehaviorSubject, take} from "rxjs";
import {RestaurantModel} from "../models/restaurant.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: Array<RestaurantModel> = [];
  restaurants$: BehaviorSubject<Array<RestaurantModel>> = new BehaviorSubject<Array<RestaurantModel>>(this.restaurants);

  constructor(
    private restaurantApiService: RestaurantApiService
  ) {
  }

  getRestaurants()
  {
    this.restaurantApiService
      .getMock()
      .pipe(take(1))
      .subscribe((res: Array<RestaurantModel>) => {
        this.restaurants = res;
        this.restaurants$.next(this.restaurants);
      })
  }

  getFood(id: number) {
    const res = this.restaurants.filter(res => res.id === +id);
    return res[0].food;
  }

  addNewRestaurant(restaurant: {title: string; desc: string; food: Array<string>}) {
    this.restaurants.push({...restaurant, id: this.restaurants.length + 1});
    this.restaurants$.next(this.restaurants);
  }

  canCreateRestaurant(title: string | null) {
    return this.restaurants.findIndex(res => res.title === title);
  }
}
