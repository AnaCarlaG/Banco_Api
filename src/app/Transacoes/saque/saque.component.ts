import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TransacaoService } from 'src/app/service/transacao.service';


@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.scss']
})
export class SaqueComponent implements OnInit {

  saqueForm: FormGroup
  constructor(
    private http: HttpClient,
    private transacaoService: TransacaoService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder.group({
      valor: [null]
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


  Saque() {
    this.transacaoService.Saque(this.saqueForm.value()).subscribe();
  }
}
