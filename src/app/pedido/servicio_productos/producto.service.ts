import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, timeout } from 'rxjs/operators';
import { Producto } from './producto.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private selected: Producto;

  constructor(public client: HttpClient) { }

  loadProductos(): Observable<Producto[]> {
    return this.client.get<any>(environment.url + 'microservicioproductos/obtenerproductos'
      ).pipe(
        map(x => x.results as Producto[])
      );
  }
/*
  setProductoSelected(Producto: Producto) {
    this.selected = Producto;
  }

  loadSelected(id: string): Observable<Producto> {
    return this.selected ? of(this.selected) : this.client.get<Producto>(environment.url
      + '/Producto/' + id + '?api_key=' + environment.apiKey + '&language=es');
  }*/

}
