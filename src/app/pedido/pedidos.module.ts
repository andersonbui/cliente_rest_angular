import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from './servicio_productos/producto.service';
import { PedidoService } from './servicio_pedidos/pedido.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [ProductoService, PedidoService]
})
export class PedidoModule { }
