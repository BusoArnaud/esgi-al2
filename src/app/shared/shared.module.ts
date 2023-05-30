import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from "./components/button/button.component";
import {CustomButtonDirective} from "./directives/custom-button.directive";
import {PrimeNumberPipe} from "./pipes/prime-number.pipe";



@NgModule({
  declarations: [
    ButtonComponent,
    CustomButtonDirective,
    PrimeNumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CustomButtonDirective,
    PrimeNumberPipe,
  ]
})
export class SharedModule { }
