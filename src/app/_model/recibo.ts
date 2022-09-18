import { Cliente } from './cliente';
import { DetalleRecibo } from './detalleRecibo';
import { Trabajador } from './trabajador';


export class Recibo{


    idRecibo : any;
    cliente : Cliente = new Cliente();
    trabajador : Trabajador = new Trabajador();
    fecha : string | undefined

    listaDetalle : DetalleRecibo[] = [];


}