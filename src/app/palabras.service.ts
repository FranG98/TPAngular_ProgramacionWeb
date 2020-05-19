import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  palabras: any[]=[
    {
      palabraIngles: 'headphone',
      palabraEspaniol: 'auricular',
      url: '../../../assets/media/auris.jpg',
    },
    {
      palabraIngles: 'keyboard',
      palabraEspaniol: 'teclado',
      url: '../../../assets/media/teclado.jpg',
    },
    {
      palabraIngles: 'microphone',
      palabraEspaniol: 'microfono',
      url: '../../../assets/media/mic.jpg',
    },
    {
      palabraIngles: 'cabinet',
      palabraEspaniol: 'gabinete',
      url: '../../../assets/media/gabinete.jpg',
    },
    {
      palabraIngles: 'motherboard',
      palabraEspaniol: 'placa madre',
      url: '../../../assets/media/placa.jpg',
    },
    {
      palabraIngles: 'processor',
      palabraEspaniol: 'procesador',
      url: '../../../assets/media/procesador.jpg',
    },
    {
      palabraIngles: 'printer',
      palabraEspaniol: 'impresora',
      url: '../../../assets/media/impresora.jpg',
    },
    {
      palabraIngles: 'speakers',
      palabraEspaniol: 'parlantes',
      url: '../../../assets/media/parla.jpg',
    },
    {
      palabraIngles: 'webcam',
      palabraEspaniol: 'camara web',
      url: '../../../assets/media/webcam.jpg',
    },
    {
      palabraIngles: 'cooler',
      palabraEspaniol: 'ventilador',
      url: '../../../assets/media/ventilador.jpg',
    },
]
  constructor() { }

  getPalabras(){
    return this.palabras;
  }

  getPalabra(i){
    return this.palabras[i];
  }
}
