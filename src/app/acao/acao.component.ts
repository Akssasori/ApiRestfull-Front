import { Acao } from './../model/acao';
import { AcaoService } from './../service/acao.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  acao: Acao;
  acoes: Acao[] = [];


  constructor(private service: AcaoService) {

  }

  ngOnInit() {
    this.listar();
  }

  public listar(){
    this.service.findAll().subscribe( res=> {
      this.acoes = res;
      console.log(res);
    })
  }

  public gravar(){
    this.service.create(this.acao).subscribe(res => {
      console.log("Acao gravada com sucesso!",res);

    })
    this.listar();
  }

}
