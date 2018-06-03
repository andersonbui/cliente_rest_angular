import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PedidoModule } from './pedido/pedidos.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidoComponent } from './pedido/pedido.component';

const appRoutes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PedidoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    PedidoModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
