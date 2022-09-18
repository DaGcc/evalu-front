import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trabajador } from './../_model/trabajador';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  url: string = `${environment.HOST}/trabajadores`

  constructor(private http:HttpClient) { }


  listar(){
    return this.http.get<Trabajador[]>(this.url)
  }
}
