import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/_model/cliente';
import { DetalleRecibo } from 'src/app/_model/detalleRecibo';
import { Producto } from 'src/app/_model/producto';
import { Trabajador } from 'src/app/_model/trabajador';
import { ClienteService } from 'src/app/_service/cliente.service';
import { ProductoService } from 'src/app/_service/producto.service';
import { TrabajadorService } from './../../../_service/trabajador.service';
import { Recibo } from './../../../_model/recibo';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ReciboService } from './../../../_service/recibo.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  clientes:Cliente[]=[];
  productos : Producto[] = []
  trabajadores: Trabajador[]=[]

  clienteSeleccionado : Cliente = new Cliente();
  trabajadorSeleccionado : Trabajador = new Trabajador();
  productoSeleccionado : Producto = new Producto();

  cantidad: number | undefined
  descripcion :string | undefined

  listaDetalle : DetalleRecibo[]=[]

  constructor(private cliService:ClienteService,private traService:TrabajadorService,private proService:ProductoService
    ,private snackBar: MatSnackBar,private service: ReciboService) { }

  ngOnInit(): void {

    this.listarClientes();
    this.listarProductos();
    this.listarTrabajadores();

  }

  listarClientes(){
    this.cliService.listar().subscribe(data=>{
      this.clientes = data;
    })
  }

  listarTrabajadores(){
    this.traService.listar().subscribe(data=>{
      this.trabajadores = data;
    })
  }


  listarProductos(){
    this.proService.listar().subscribe(data=>{
      this.productos = data;
    })
  }

  agregar(){
    let d : DetalleRecibo =  new DetalleRecibo();
    let bd : number = 0;
    this.listaDetalle.forEach(dett=>{
      if(dett.producto.idProducto===this.productoSeleccionado.idProducto){
        bd=1;
      }else{
        bd = 0;
      }
    })
    if(bd==0){
    d.cantidad = this.cantidad;
    d.descripcion = this.descripcion;
    d.producto = this.productoSeleccionado;
    this.listaDetalle.push(d);
    }else{
      this.snackBar.open("YA SE ENCUENTRA EN LISTA",'AVISO',{
        duration:1000
      })
    }
  }

  quitar(i:number){
    this.listaDetalle.splice(i,1);
  }


  operar(){
    let re = new Recibo();
    re.cliente = this.clienteSeleccionado;
    re.trabajador = this.trabajadorSeleccionado;
    let fgt = (new Date()).getTimezoneOffset()*60000;
    let ISOdate = (new Date(Date.now()-fgt)).toISOString();

    re.fecha =ISOdate;

    re.listaDetalle = this.listaDetalle;

    console.log(re);
    this.service.registrar(re).pipe(switchMap(() =>{
      return this.service.listar();
    })).subscribe(data=>{
      this.service.reciboCamio.next(data)
    })
  }


}
