export class Pasaje {
    
    dniPasajero: number;
    tipoPasajero: string;
    precioFinal: number;
    fechaPasaje: Date;

    Pasaje(dniPasajero?: number, tipoPasajero?: string, precioFinal?: number, fechaPasaje?: Date){
        this.dniPasajero = dniPasajero;
        this.tipoPasajero = tipoPasajero;
        this.precioFinal = precioFinal;
        this.fechaPasaje = fechaPasaje;
    }
}
