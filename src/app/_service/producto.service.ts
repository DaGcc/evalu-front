import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../_model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  url: string = `${environment.HOST}/productos`

  constructor(private http:HttpClient) { }


  listar(){
    return this.http.get<Producto[]>(this.url)
  }


}
