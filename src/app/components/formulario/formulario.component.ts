import { Component, OnInit } from '@angular/core';

import { Asistente } from '../../models/asistente';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  asistente: Asistente;

  asistentes: Array<Asistente>;
  constructor() {
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
   }

  ngOnInit(): void {
  }

  registrarAsistente(){
    if (this.asistente.usuario!=null && this.asistente.nombreOrg !=null && this.asistente.usuario!="" && this.asistente.nombreOrg!=""){
      this.asistentes.push(this.asistente);
      this.asistente = new Asistente();}
    else{
      this.asistente = new Asistente();
    }  
  }
}
