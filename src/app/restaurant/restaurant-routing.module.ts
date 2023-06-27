import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./pages/list/list.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {FormTDComponent} from "./pages/form-td/form-td.component";
import {FormRFComponent} from "./pages/form-rf/form-rf.component";

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'formTD', component: FormTDComponent },
  { path: 'formRF', component: FormRFComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
