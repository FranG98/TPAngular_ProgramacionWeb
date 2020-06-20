import { Component, OnInit } from '@angular/core';

import { Empresa } from '../../models/empresa';
import { Mensaje } from '../../models/mensaje';
import { MensajeService } from '../../services/mensaje.service';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  indice: number;
  empresaSelect: Empresa;
  empresas: Array<Empresa>;
  mensaje: Mensaje;
  tamMaxTexto: number = 120;
  tamTexto: number = 0;

  empresasAux : any[] = [
    {
      nombre: 'Claro',
      email: '611@claro.com.ar',
    },
    {
      nombre: 'Personal',
      email: 'telecom@gmail.com',
    },
    {
      nombre: 'Movistar',
      email: 'movistar@gmail.com',
    },
  ];

  constructor(private mensajeService: MensajeService) { 
    this.empresaSelect = new Empresa();
    this.empresas = new Array<Empresa>();
    this.mensaje = new Mensaje();
  }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
  }

  public enviarTexto(){
    var arrayAux: Array<Empresa>;
    this.mensaje.empresa = this.empresasAux[this.indice];
    console.log(this.mensaje.empresa);
    this.mensajeService.agregarEmpresa(this.empresasAux[this.indice]).subscribe(
      (res) =>{
        console.log(res);
      }
    );
    this.mensajeService.obtenerEmpresas().subscribe(
      (res) => {
        arrayAux = res as Array<Empresa>;
        this.mensaje.empresa = arrayAux[arrayAux.length-1];
        this.mensajeService.agregarMensaje(this.mensaje).subscribe(
          (res) => {
            console.log(res);
          }
        );
      }
    )
  }

  public limpiarTexto(){
    this.mensaje.texto = "";
  }
}
