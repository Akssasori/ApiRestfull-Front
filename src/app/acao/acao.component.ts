import { AcaoService } from './../service/acao.service';
import { Component, OnInit } from '@angular/core';
import { Acao } from '../model/acao';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

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

}
