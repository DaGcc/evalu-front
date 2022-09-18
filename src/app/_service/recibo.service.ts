import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recibo } from '../_model/recibo';

@Injectable({
  providedIn: 'root'
})
export class ReciboService {

  reciboCamio = new Subject<Recibo[]>();
  mensajeCambio = new Subject<string>();
  url: string = `${environment.HOST}/recibos`

  constructor(private http:HttpClient) { }


  listar(){
    return this.http.get<Recibo[]>(this.url)
  }

  registrar(re: Recibo){
    return this.http.post(this.url,re)
  }

  modificar(re: Recibo){
    return this.http.put(this.url,re)
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

}
