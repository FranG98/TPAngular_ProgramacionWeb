import { Component, OnInit } from '@angular/core';

import { Asistente } from '../../models/asistente';
import { AsistenteService } from '../../services/asistente.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  asistente: Asistente;
  asistentes: Array<Asistente>;
  constructor(private asistenteService: AsistenteService) {
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
    this.obtenerAsistentes();
   }

  ngOnInit(): void {
  }

  registrarAsistente(){
    var modificar: boolean = false;
    var j: number = 0;
    for(j; j <= this.asistentes.length-1;j++){
      if(this.asistentes[j]._id == this.asistente._id){
        modificar = true;
      }
    }
    
    if(modificar == true){
      this.asistenteService.actualizarAsistente(this.asistente).subscribe(
        (res) => {
          console.log(res);
        }
      )
    }else{
      this.asistenteService.agregarAsistente(this.asistente).subscribe(
        (res) => {
          console.log(res);
        }
      );
      this.asistente = new Asistente();
    }
     
  }

  obtenerAsistentes(){
    this.asistenteService.obtenerAsistentes().subscribe(
      (res) => {
        console.log(res);
        this.asistentes = res as Array<Asistente>;
      }
    )
  }

  editarAsistente(asistente: Asistente){
    this.asistente = asistente;
  }

  eliminarAsistente(id: string){
    this.asistenteService.eliminarAsistente(id).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }
}
