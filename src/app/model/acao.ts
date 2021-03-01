export class Acao{
    id:number;
    programa:string;
    data:Date;
    cliente:string;
    idCliente:string;
    produto:string;
    tipoAcao:string;
    descricao:string;
    entrada:string;
    saida:string;
    agencia:string;
    url:string;
    idAgencia:string;
    duracao:string;
    tvAberta:boolean;

    constructor(id?:number,programa?:string,data?:Date,cliente?:string,idCliente?:string,
        produto?:string,tipoAcao?:string,descricao?:string,entrada?:string,saida?:string,
        agencia?:string,url?:string,idAgencia?:string,duracao?:string,tvAberta?:boolean){

    }

    

}