import { Component, OnInit } from '@angular/core';

import { PalabrasService } from '../../services/palabras.service';
import { Palabra } from 'src/app/models/palabra';
@Component({
  selector: 'app-crucigrama',
  templateUrl: './crucigrama.component.html',
  styleUrls: ['./crucigrama.component.css']
})
export class CrucigramaComponent implements OnInit {

  mostrar: boolean = true;
  err: boolean = false;
  cont: boolean = false;
  juegoPerdido: boolean = false;
  juegoCompletado: boolean = false;
  vidas: number = 6;
  puntaje: number = 0;
  contador: number = 0;
  let: string;
  lista: Array<Palabra>;
  palabraActual: Array<string>;
  arrayAux: Array<string>;
  palabraSelect: Palabra;
  
  constructor(private servicio: PalabrasService) {
    this.lista = new Array<Palabra>();
    this.palabraActual = new Array<string>();
    this.arrayAux = new Array<string>();
  }

  ngOnInit(): void {
  }

  public cambio(){
    this.mostrar = false;
    this.lista = this.servicio.getPalabras();
    this.aleatorizarArray(this.lista);
    this.seleccionarPalabra();
  }

  public check(letra: string, indice: string){
    var aux: boolean = false;
    var j: number;
    if (letra.toLowerCase() == indice){
      console.log(letra);
    console.log(indice);
      aux = true;
    }
    console.log(aux);
    if (letra != "" && aux == false){
      this.err = true;
      console.log(this.err);
    }
    if (this.err == true){
      this.vidas--;
      this.err = false;
    }
    if (this.vidas == 0){
      console.log(this.vidas)
      this.juegoPerdido = true;
      console.log(this.juegoPerdido);
    }
    this.cont = true;
    for (j=0;j <= this.palabraActual.length-1;j++){
      if(this.arrayAux[j].toLowerCase()!=this.palabraActual[j]){
        this.cont = false;
      }
    }
    if (this.cont == true){
      this.cont = false;
      this.puntaje++;
      this.contador++;
      this.palabraActual = new Array<string>();
      this.arrayAux = new Array<string>();
      
      if(this.puntaje == 10){
        this.juegoCompletado = true;
        console.log("completado?: " + this.juegoCompletado);
        return;
      }else{
        this.seleccionarPalabra();
      }
    }
    
  }

  public reset(){
    this.mostrar = true;
    this.lista = new Array<any>();
    this.palabraActual = new Array<string>();
    this.arrayAux = new Array<string>();
    this.contador = 0; 
    this.puntaje = 0;
    this.vidas = 6;
    this.err = false;
    this.cont = false;
    this.juegoPerdido = false;
    this.juegoCompletado = false;
  }

  aleatorizarArray(array: Array<any>){
    var i = array.length, j, k;
    while (i){
      k = Math.floor(Math.random() * i--);
      j = array[i];
      array[i] = array [k];
      array[k] = j;
    }
    return array;
  }

  
  public seleccionarPalabra(){
    var j: number;
     for (j=0; j <= this.lista[this.contador].palabraIngles.length-1; j++){
        this.palabraActual[j] = this.lista[this.contador].palabraIngles[j];
        console.log(this.palabraActual[j]);
     }
     console.log(this.palabraActual);
     this.palabraSelect = this.lista[this.contador];
     console.log(this.palabraSelect);
  }
}
