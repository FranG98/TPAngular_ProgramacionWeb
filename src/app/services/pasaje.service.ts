import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Pasaje } from '../models/pasaje'
@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  ventas: Array<Pasaje>;

  urlBase3: string = 'http://localhost:3000/api/punto3';
  constructor(private _http: HttpClient) { 
    this.ventas = new Array<Pasaje>();
  }

  obtenerPasajes(){
    return this._http.get(this.urlBase3);
  }

  actualizarPasaje(pasaje: Pasaje){
    return this._http.put(this.urlBase3+ `/${pasaje._id}`, pasaje);
  }

  registrarPasaje(pasaje: Pasaje){
    return this._http.post(this.urlBase3,pasaje);
  }

  eliminarPasaje(_id: string){
    return this._http.delete(this.urlBase3 + `/${_id}`);
  }
}
