import {createFeatureSelector, createSelector} from "@ngrx/store";
import {} from "./app.reducer";
import {RestaurantModel} from "../restaurant/models/restaurant.model";

interface restState {
  list: Array<RestaurantModel>
}
export const selectRestaurantState =
  createFeatureSelector<restState>('restaurant');

export const selectRestaurantList =
  createSelector(
  selectRestaurantState,
  ({list}) => list
)
