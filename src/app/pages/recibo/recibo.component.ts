import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Recibo } from 'src/app/_model/recibo';
import { ReciboService } from './../../_service/recibo.service';
import { DetalleRecibo } from './../../_model/detalleRecibo';
import { DetalleComponent } from './detalle/detalle.component';
import { CrearComponent } from './crear/crear.component';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.component.html',
  styleUrls: ['./recibo.component.css']
})
export class ReciboComponent implements OnInit {
  estado: boolean=true;
  dataSource:any;
  displayedColumns: string[] = ['idRecibo', 'cliente', 'trabajador', 'fecha','listaDetalle','otros']

  @ViewChild(MatPaginator) paginator: MatPaginator|undefined;
  @ViewChild(MatSort) sort: MatSort|undefined;
  constructor(private service: ReciboService,public dialog: MatDialog,private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.service.reciboCamio.subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginatos = this.paginator;
    })

    this.service.mensajeCambio.subscribe(data=>{
      this.snackBar.open(data,"AVISO",{
        duration:1000
      })
    })

    setTimeout(()=>{
      this.service.listar().subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginatos = this.paginator;
        console.log(data)
      })
      this.estado=false;
    },1500)
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   
  }



  openDialog(re:Recibo){
    
    this.dialog.open(DetalleComponent, {
      width:"500px",
      data: re,
    });
  }

  openDialogCrear(){
    this.dialog.open(CrearComponent, {
      width:"600px",
      height:"600px",
      data: new Recibo(),
    });
  }

  eliminar(r:Recibo){
    this.service.eliminar(r.idRecibo).pipe(switchMap(()=>{
      return this.service.listar()
    })).subscribe(data=>{
      this.service.reciboCamio.next(data);
      this.service.mensajeCambio.next("SE ELIMINO")
    })
  }


}
