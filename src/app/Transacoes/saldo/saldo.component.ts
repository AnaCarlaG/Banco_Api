import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransacaoService } from 'src/app/service/transacao.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transacao } from 'src/app/Model/Transacao.model';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private transacaoService: TransacaoService,
  ) { }

  ngOnInit(): void {

  }

    //colocar a url
    saque = this.transacaoService.Saldo();

}
