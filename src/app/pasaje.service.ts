import { Injectable } from '@angular/core';

import { Pasaje } from './models/pasaje'
@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  ventas: Array<Pasaje>;
  constructor() { 
    this.ventas = new Array<Pasaje>();
  }

  getVentas(){
    return this.ventas;
  }

  getVenta(i){
    return this.ventas[i];
  }

  registrarVenta(venta: Pasaje){
    this.ventas.push(venta);
  }
}
