import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
