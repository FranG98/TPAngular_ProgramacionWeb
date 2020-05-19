import { Component, OnInit } from '@angular/core';

import { Mensaje } from '../../models/mensaje';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensaje: Mensaje;
  tamMaxTexto: number = 120;
  tamTexto: number = 0;


  constructor() { 
    this.mensaje = new Mensaje();

  }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }

  public limpiarTexto(){
    this.mensaje.texto = "";
  }
}
