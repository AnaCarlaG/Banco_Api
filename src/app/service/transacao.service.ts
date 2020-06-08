import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService.service';
import { delay, take } from 'rxjs/operators';
import { Transacao } from '../Model/Transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService extends BaseService {

  constructor(http: HttpClient) {
    super(http, '/produto')
  }

  ObterTodos() {
    return this.http.get<Transacao[]>(this.apiControllerUrl)
      .pipe(
        delay(2000)
      );
  }

  ObterPorId(id: number) {
    return this.http.get<Transacao>(`${this.apiControllerUrl}/${id}`).pipe(take(1));
  }

  //Atualizar
  Atualizar(transacao: Transacao) {
    this.http.put(this.apiControllerUrl, transacao);
  }

  //Delete
  Delete(id: number) {
    return this.http.delete(`${this.apiControllerUrl}/${id}`).pipe(take(1));
  }

  Depositar(transacao: Transacao) {
    return this.http.post<Transacao>(this.apiControllerUrl, transacao);
  }

  Saque(transacao: Transacao) {
    return this.http.post(this.apiControllerUrl, transacao);

  }

  Saldo(){
    return this.http.get<Transacao>(this.apiControllerUrl);
  }

}
