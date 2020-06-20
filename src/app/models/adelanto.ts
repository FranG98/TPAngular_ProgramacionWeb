export class Adelanto {
    
    _id: string;
    fecha: Date;
    cobrador: string;
    montoAdelanto: number;

    adelanto(_id?: string, fecha?: Date, cobrador?: string, montoAdelanto?: number){
        this._id = _id;
        this.fecha = fecha;
        this.cobrador = cobrador;
        this.montoAdelanto = montoAdelanto;
    }
}
