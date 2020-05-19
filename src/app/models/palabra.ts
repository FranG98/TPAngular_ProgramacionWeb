export class Palabra {
    palabraIngles: string;
    palabraEspaniol: string;
    url: string;

    Palabra(palabraIngles?: string, palabraEspaniol?: string, url?: string){
        this.palabraIngles = palabraIngles;
        this.palabraEspaniol = palabraEspaniol;
        this.url = url
    }
}
