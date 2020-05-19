import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { CrucigramaComponent } from './components/crucigrama/crucigrama.component';

import { PasajeService } from './pasaje.service'
import { PalabrasService } from './palabras.service'
const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'mensajes', component: MensajesComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'crucigrama', component: CrucigramaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PasajeService, PalabrasService]
})
export class AppRoutingModule { }
