import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ButtonComponent } from './components/button/button.component';
import { CustomButtonDirective } from './directives/custom-button.directive';
import { PrimeNumberPipe } from './pipes/prime-number.pipe';
import { ListComponent } from "./pages/list/list.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonComponent,
    CustomButtonDirective,
    PrimeNumberPipe,
    ListComponent,
    DetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
