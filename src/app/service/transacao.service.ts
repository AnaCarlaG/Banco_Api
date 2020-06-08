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
    super(http, '/')
  }

  Depositar(transacao: Transacao) {
    return this.http.post<Transacao>(this.apiControllerUrl, transacao);
  }

  Saque(transacao: Transacao) {
    return this.http.post(this.apiControllerUrl, transacao);

  }

  Saldo(){
   return this.http.get<number>(this.apiControllerUrl);
  }

}
