import {createReducer, on} from "@ngrx/store";
import {RestaurantModel} from "../restaurant/models/restaurant.model";
import * as RestaurantActions from "./app.actions";

interface RestaurantsState {
  list: Array<RestaurantModel>
}
export const initialState: RestaurantsState = {
  list: []
}

export const restaurantsReducer = createReducer(
  initialState
);
