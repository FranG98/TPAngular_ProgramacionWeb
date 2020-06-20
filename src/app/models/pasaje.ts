import { Adelanto } from '../models/adelanto'
export class Pasaje {
    
    _id: string;
    dniPasajero: number;
    categoriaPasajero: string;
    precioPasaje: number;
    fechaCompra: Date;
    adelantos: Array<Adelanto>;

    Pasaje(_id?:string, dniPasajero?: number, tipoPasajero?: string, precioFinal?: number, fechaPasaje?: Date){
        this._id = _id;
        this.dniPasajero = dniPasajero;
        this.categoriaPasajero = tipoPasajero;
        this.precioPasaje = precioFinal;
        this.fechaCompra = fechaPasaje;
        this.adelantos = new Array<Adelanto>();
    }
}
