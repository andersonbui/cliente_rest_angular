import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, timeout } from 'rxjs/operators';
import { Pedido } from './pedido.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private selected: Pedido;

  constructor(public client: HttpClient) { }

  registrarPedido(pedido: Pedido): Observable<Pedido> {
    // let headers = new HttpHeaders().set('Autorization', 'auth-token');
    return this.client.put<any>(environment.url + 'microserviciopedido/registrarPedido', pedido);
  }
/*
  setPedidoSelected(Pedido: Pedido) {
    this.selected = Pedido;
  }

  loadSelected(id: string): Observable<Pedido> {
    return this.selected ? of(this.selected) : this.client.get<Pedido>(environment.url
      + '/Pedido/' + id + '?api_key=' + environment.apiKey + '&language=es');
  }*/

}
