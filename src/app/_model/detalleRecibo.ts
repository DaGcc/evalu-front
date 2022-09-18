import { Producto } from "./producto";

export class DetalleRecibo{

    idDetalleRecibo: any;
    nombre:string |undefined;
    producto : Producto = new Producto();

    descripcion: string | undefined;
    cantidad : number |undefined;
}