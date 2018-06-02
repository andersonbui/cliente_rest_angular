import { Component, OnInit } from '@angular/core';
import { PedidoService } from './servicio_pedidos/pedido.service';
import { ProductoService } from './servicio_productos/producto.service';
import { Producto } from './servicio_productos/producto.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  productos: Producto[] = [];
  // productos: Producto[] = [new Producto('pacho', 23000), new Producto('luis', 23000)];
  constructor(public service_pedido: PedidoService, public service_producto: ProductoService) {
    service_producto.loadProductos()
    .subscribe(
      x => this.productos = x
      , err => console.log(err));
  }

  ngOnInit() {
  }

}
