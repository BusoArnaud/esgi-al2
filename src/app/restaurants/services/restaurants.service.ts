import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private restaurants: Array<{id: number; title: string; desc: string; food: Array<string>}> = [
    {
      id: 1,
      title: 'Fontaine de Trevi',
      desc: 'Cuisine de famille italienne',
      food: ['pizza', 'pasta', 'tiramisu']
    },
    {
      id: 2,
      title: 'Taj Mahal',
      desc: 'Cuisine indienne',
      food: ['masala dosa', 'dal makhani', 'pani puri']
    },
    {
      id: 3,
      title: 'Sanctuaire Asakusa',
      desc: 'Cuisine japonaise',
      food: ['onigiri', 'sushi & sashimi', 'ramen']
    }
  ];

  getRestaurants() {
    return this.restaurants;
  }

  getFood(id: number) {
    const res = this.restaurants.filter(res => res.id === +id);
    return res[0].food;
  }

  addNewRestaurant(restaurant: {title: string; desc: string; food: Array<string>}) {
    this.restaurants.push({...restaurant, id: this.restaurants.length + 1})
  }
}
