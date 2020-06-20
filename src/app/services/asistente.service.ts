import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asistente } from '../models/asistente';
@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  urlBase: string = 'http://localhost:3000/api/punto1';

  constructor(private _http: HttpClient) { }

  obtenerAsistentes(){
    return this._http.get(this.urlBase);
  }

  agregarAsistente(asistente: Asistente){
    return this._http.post(this.urlBase, asistente);
  }

 actualizarAsistente(asistente: Asistente){
    return this._http.put(this.urlBase + `/${asistente._id}`, asistente);
  }

  eliminarAsistente(_id: string){
    return this._http.delete(this.urlBase + `/${_id}`);
  }
}
