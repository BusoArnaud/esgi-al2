import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
  { path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule) },
  { path: '', redirectTo: '/counter', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
