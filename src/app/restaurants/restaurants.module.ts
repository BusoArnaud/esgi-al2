import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./pages/list/list.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {RestaurantsRoutingModule} from "./restaurants-routing.module";



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RestaurantsRoutingModule,
  ]
})
export class RestaurantsModule { }
