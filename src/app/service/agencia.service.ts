import { Agencia } from './../model/agencia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlAgencia : string = "http://localhost:4455/api/v1/agencias";

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  constructor(private http : HttpClient) { }

  public findAll(){
    return this.http.get<Agencia[]>(`${urlAgencia}`)
  }

  public create(agencia: Agencia){
    return this.http.post<Agencia>(`${urlAgencia}`,agencia);
  }
}
