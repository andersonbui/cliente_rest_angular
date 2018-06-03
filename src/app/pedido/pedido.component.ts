import { Component, OnInit } from '@angular/core';
import { PedidoService } from './servicio_pedidos/pedido.service';
import { ProductoService } from './servicio_productos/producto.service';
import { Producto } from './servicio_productos/producto.model';
import { Pedido } from './servicio_pedidos/pedido.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  productos: Producto[];
  posts: Observable<Producto[]>;
  respuesta: Observable<any>;
  nuevoPedido: Pedido;
  // productos: Producto[] = [new Producto('pacho', 23000), new Producto('luis', 23000)];

  constructor(public service_pedido: PedidoService, public service_producto: ProductoService) {
    this.posts = service_producto.loadProductos();
    this.posts.subscribe(x => this.productos = x);
  }

  ngOnInit() {
  }

  registrarPedido() {
    const unPedido: Pedido = {
      nombre: 'yesmi',
      tipo_identificacion: 'cedula',
      identificacion: '1059',
      tipo_ropa: 'camisas formales',
      cantidad: 5,
      fecha_hora_entrega: '01/05/2018',
      direccion_entrega: 'B esmeralda',
      precio_total: '23000',
      valido: null
    };

    this.respuesta = this.service_pedido.registrarPedido(unPedido);
  }

}
