import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    InputComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }