import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { Mensaje } from '../models/mensaje';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  urlBase1: string = 'http://localhost:3000/api/punto2/mensajes';
  urlBase2: string = 'http://localhost:3000/api/punto2/empresas';

  constructor(private _http: HttpClient) { }

 

  agregarEmpresa(empresa: Empresa){
    return this._http.post(this.urlBase2, empresa);
  }

  obtenerEmpresas(){
    return this._http.get(this.urlBase2);
  }

  agregarMensaje(mensaje: Mensaje){
    return this._http.post(this.urlBase1, mensaje);
  }
}
