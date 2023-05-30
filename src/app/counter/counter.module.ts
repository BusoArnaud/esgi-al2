import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CounterComponent} from "./counter/counter.component";
import {SharedModule} from "../shared/shared.module";
import {CounterRoutingModule} from "./counter-routing.module";


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CounterRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class CounterModule { }
