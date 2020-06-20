import { Component, OnInit } from '@angular/core';

import { Adelanto } from '../../models/adelanto';
import { Pasaje } from '../../models/pasaje';

import { PasajeService } from '../../services/pasaje.service'
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  modificar: boolean = false;
  control2: boolean = false;
  adelantoNuevo: Adelanto;
  adelantos: Array<Adelanto>;
  pasaje: Pasaje;
  aux: number;
  control: boolean = false;
  pasajeJ: number = 0;
  pasajeA: number = 0;
  pasajeM: number = 0;
  pasajesTotal: number = 0;
  registro: Array<Pasaje>;
  constructor(private servicio: PasajeService) {
    this.pasaje = new Pasaje;
    this.pasaje.fechaCompra = new Date();
    this.adelantoNuevo = new Adelanto;
    this.adelantos = new Array<Adelanto>();
    this.registro = new Array<Pasaje>();
    this.servicio.obtenerPasajes().subscribe(
      (res) => {
        this.registro = res as Array<Pasaje>;
      }
    )
  }

  ngOnInit(): void {
  }

  public cambiarPrecio(){
    if (this.pasaje.categoriaPasajero=="m"){
      this.pasaje.precioPasaje = this.aux * 0.75;
    } else{
      if (this.pasaje.categoriaPasajero=="j"){
        this.pasaje.precioPasaje = this.aux * 0.5;
      }else{
        this.pasaje.precioPasaje = this.aux;
      }
    }
  }

  public pruebaLetra(){
    console.log(this.pasaje.categoriaPasajero);
  }

  public controlador(){
    if( this.pasaje.precioPasaje!=null && this.pasaje.categoriaPasajero!=null && this.pasaje.dniPasajero!=null){
      this.control = true;
    }
  }

  public registrarPasaje(){
    this.controlador();
    this.pasaje.adelantos = this.adelantos;
    var j: number = 0;
    for(j; j <= this.registro.length-1;j++){
      if(this.registro[j]._id == this.pasaje._id){
        this.modificar = true;
      }
    }
    if (this.control == true){
      if (this.modificar == true){
        this.servicio.actualizarPasaje(this.pasaje).subscribe(
          (res) => {
            console.log(res);
          }
        )
      }else{
        this.servicio.registrarPasaje(this.pasaje).subscribe(
          (res) => {
            console.log(res);
          }
        );
        this.servicio.obtenerPasajes().subscribe(
          (res) => {
            this.registro = new Array<Pasaje>();
            this.registro = res as Array<Pasaje>;
          }
        );  
      }
      
      /*this.pasajesTotal++;
      if (this.pasaje.categoriaPasajero=="m"){
        this.pasajeM++;
      } else{
        if (this.pasaje.categoriaPasajero=="j"){
          this.pasajeJ++;
        }else{
          this.pasajeA++;
        }
      }*/
      this.pasaje = new Pasaje();
      this.pasaje.fechaCompra = new Date();
      this.adelantoNuevo = new Adelanto();
      this.adelantos = new Array<Adelanto>();
      this.control = false;
    }
  }

  public agregarAdelanto(){
    this.adelantoNuevo.fecha = new Date();
    if (this.adelantos.length == 0){
      if (this.adelantoNuevo.montoAdelanto <= this.pasaje.precioPasaje){
        this.adelantos.push(this.adelantoNuevo);
        this.adelantoNuevo = new Adelanto();
      }
    }else{
      this.adelantos.push(this.adelantoNuevo);
      this.adelantoNuevo = new Adelanto();
    }
  }

  public eliminarAdelanto(indice: number){
    this.adelantos.splice(indice,1);
  }

  public controlMonto(){
    this.control2 = false;
    var sumaAdelantos, j: number = 0;
    if (this.adelantos.length == 0){
      if (this.adelantoNuevo.montoAdelanto > this.pasaje.precioPasaje){
        this.control2 = true;
      }
    }else{
      sumaAdelantos = 0;
      for(j; j <= this.adelantos.length-1;j++){
        
        sumaAdelantos = this.adelantos[j].montoAdelanto + sumaAdelantos;
      }
      sumaAdelantos = sumaAdelantos + this.adelantoNuevo.montoAdelanto;
      if (sumaAdelantos <= this.pasaje.precioPasaje){
         console.log("ok");
          this.control2 = false;
      }else{
        this.control2 = true;
      }
      console.log(this.adelantos);
    }   
  }

  public editarPasaje(pasaje: Pasaje){
    this.pasaje = pasaje;
    this.adelantos = new Array<Adelanto>();
    this.adelantos = pasaje.adelantos;
    this.aux = pasaje.precioPasaje;
    this.control = true;
  }

  public eliminarPasaje(id: string){
    this.servicio.eliminarPasaje(id).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
}