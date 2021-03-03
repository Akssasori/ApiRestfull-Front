import { Acao } from './../model/acao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  public create(acao: Acao){
    return this.http.post<Acao>(`${urlAcao}`,acao);
  }

  // public update(acao: Acao):Observable<Acao>{
  //   const url = `${urlAcao}/${acao.id}`;
  //   return this.http.put<Acao>(url,acao)
  // }
  // public update(acao:Acao){
  //   return this.http.put<Acao>(`${urlAcao}/${acao.id}`);
  // }

  // public delete(id:number):Observable<Acao>{
  //   const url = `${urlAcao}/${id}`;
  //   return this.http.delete<Acao>(url);

  // }

  // public deleteAcao(id){
  //   return this.http.delete(`${urlAcao}/${id}`)
  // }

   

}
