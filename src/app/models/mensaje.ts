import { Empresa } from './empresa';
export class Mensaje {
    _id: string;
    para: string;
    desde: string;
    texto: string;
    fecha: Date;
    empresa: Empresa;

    Mensaje(_id?: string, para?: string, desde?:string, texto?:string){
        this._id = _id;
        this.para = para;
        this.desde = desde;
        this.texto = texto;
        this.fecha = new Date();
        this.empresa = new Empresa();
    }
}
