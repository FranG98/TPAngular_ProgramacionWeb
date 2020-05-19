import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Pasaje } from '../../models/pasaje';

import { PasajeService } from '../../pasaje.service'
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  pasaje: Pasaje;
  aux: number;
  control: boolean = false;
  pasajeJ: number = 0;
  pasajeA: number = 0;
  pasajeM: number = 0;
  pasajesTotal: number = 0;
  registro: any[]=[];
  constructor(private servicio: PasajeService) {
    this.pasaje = new Pasaje;
    this.pasaje.fechaPasaje = new Date();
  }

  ngOnInit(): void {
  }

  public cambiarPrecio(){
    if (this.pasaje.tipoPasajero=="m"){
      this.pasaje.precioFinal = this.aux * 0.75;
    } else{
      if (this.pasaje.tipoPasajero=="j"){
        this.pasaje.precioFinal = this.aux * 0.5;
      }else{
        this.pasaje.precioFinal = this.aux;
      }
    }
  }

  public pruebaLetra(){
    console.log(this.pasaje.tipoPasajero);
  }

  public controlador(){
    if( this.pasaje.precioFinal!=null && this.pasaje.tipoPasajero!=null && this.pasaje.dniPasajero!=null){
      this.control = true;
    }
  }

  public registrarPasaje(){
    this.controlador();
    if (this.control == true){
      this.servicio.registrarVenta(this.pasaje);
      this.registro = this.servicio.getVentas();
      this.pasajesTotal++;
      if (this.pasaje.tipoPasajero=="m"){
        this.pasajeM++;
      } else{
        if (this.pasaje.tipoPasajero=="j"){
          this.pasajeJ++;
        }else{
          this.pasajeA++;
        }
      }
      this.pasaje = new Pasaje();
      this.pasaje.fechaPasaje = new Date();
    }
  }
}