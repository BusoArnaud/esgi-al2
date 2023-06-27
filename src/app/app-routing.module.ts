import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'counter', loadComponent: () => import('./counter/counter/counter.component').then(c => c.CounterComponent) },
  { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: '', redirectTo: '/counter', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
