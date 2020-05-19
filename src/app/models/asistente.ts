export class Asistente {
    usuario: string;
    nombreOrg: string;
    solicitaConstancia: boolean;

    Asistente(usuario?: string, nombreOrg?:string, solicitaConstancia?:boolean){
        this.usuario = usuario;
        this.nombreOrg = nombreOrg;
        this.solicitaConstancia = solicitaConstancia;
    }
}
