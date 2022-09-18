import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../_model/cliente';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = `${environment.HOST}/clientes`

  constructor(private http:HttpClient) { }


  listar(){
    return this.http.get<Cliente[]>(this.url)
  }

}
