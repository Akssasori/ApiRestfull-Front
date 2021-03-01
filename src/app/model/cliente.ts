export class Cliente {
    id:number;
    idCliente:number;
    cliente:string;

    constructor(id?:number,idCliente?:number,cliente?:string){
        this.id = id;
        this.idCliente = idCliente;
        this.cliente = cliente;

    }
}