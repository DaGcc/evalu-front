import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalleRecibo } from 'src/app/_model/detalleRecibo';
import { Recibo } from './../../../_model/recibo';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number|undefined
  fecha: string|undefined
  listaDetalles: DetalleRecibo[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data:Recibo) { }

  ngOnInit(): void {
    console.log(this.data)
     this.listaDetalles = this.data.listaDetalle
    this.id = this.data.idRecibo
    this.fecha = this.data.fecha
  }

}
