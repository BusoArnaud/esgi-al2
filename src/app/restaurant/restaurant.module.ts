import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListComponent} from "./pages/list/list.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {RestaurantRoutingModule} from "./restaurant-routing.module";
import { FormTDComponent } from './pages/form-td/form-td.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormRFComponent } from './pages/form-rf/form-rf.component';
import {ButtonModule} from "../components/button/button.component";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    FormTDComponent,
    FormRFComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    RouterModule,
    RestaurantRoutingModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class RestaurantModule { }
