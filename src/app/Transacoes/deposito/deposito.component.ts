import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransacaoService } from 'src/app/service/transacao.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.scss'],
  preserveWhitespaces: true
})
export class DepositoComponent implements OnInit {

  depositarForm: FormGroup
  constructor(
    private http: HttpClient,
    private transacaoService: TransacaoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder.group({
      deposito: [null]
    })
  }
  public mascaraCodigo = [/[0-9]/, /\d/, /\d/, /\d/, /\d/];

  mascaraCod(num: string) {
    if (num.length == 0)
      return [""];
    if (num.length == 1)
      return [/[0-9]/, ""];
    if (num.length == 2)
      return [/[0-9]/, /\d/, ""]
    if (num.length == 3)
      return [/[0-9]/, /\d/, /\d/, ""]
    if (num.length == 4)
      return [/[0-9]/, /\d/, /\d/, /\d/, ""]
    if (num.length == 5)
      return [/[0-9]/, /\d/, /\d/, /\d/, /\d/];
  }


  Depositar() {
    this.transacaoService.Depositar(this.depositarForm.value()).subscribe();
  }
}
