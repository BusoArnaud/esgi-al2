import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./pages/list/list.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {RestaurantsRoutingModule} from "./restaurants-routing.module";
import { FormTDComponent } from './pages/form-td/form-td.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    FormTDComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RestaurantsRoutingModule,
    FormsModule,
  ]
})
export class RestaurantsModule { }
