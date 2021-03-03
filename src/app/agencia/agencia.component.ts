import { Agencia } from './../model/agencia';
import { Component, OnInit } from '@angular/core';
import { AgenciaService } from '../service/agencia.service';

@Component({
  selector: 'app-agencia',
  templateUrl: './agencia.component.html',
  styleUrls: ['./agencia.component.css']
})
export class AgenciaComponent implements OnInit {

  agencia: Agencia;
  agencias: Agencia[]=[];

  constructor(private service : AgenciaService) { }

  ngOnInit() {
    this.listarAgencia();
  }

  public listarAgencia(){
    this.service.findAll().subscribe( res =>{
      this.agencias = res;
      console.log(res);
    })
  }

  public gravarAgencia(){
    this.service.create(this.agencia).subscribe(res => {
      console.log("Agência gravada com sucesso!",res);

    })
    this.listarAgencia();
  }

}
