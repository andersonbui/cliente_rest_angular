import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, timeout } from 'rxjs/operators';
import { Pedido } from './pedido.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class PedidoService {

  private selected: Pedido;

  constructor(public client: HttpClient) { }

  loadPedidos(page: number): Observable<Pedido[]> {
    return this.client.get<any>(environment.url + 'microserviciopedido/registrarPedido'
      ).pipe(
        map(x => x.results as Pedido[])
      );
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
