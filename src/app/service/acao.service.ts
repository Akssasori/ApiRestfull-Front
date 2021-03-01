import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acao } from '../model/acao';

const urlAcao: string = 'http://localhost:4455/api/v1/acoes';

@Injectable({
  providedIn: 'root'
})
export class AcaoService {

  constructor(private http: HttpClient){

  }

  public findAll(){
    return this.http.get<Acao[]>(`${urlAcao}`)
  }

}
