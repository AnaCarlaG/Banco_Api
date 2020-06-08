import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransacaoService } from 'src/app/service/transacao.service';
import { HttpClient } from '@angular/common/http';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

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
  // First, you need to create the `numberMask` with your desired configurations
  public numberMask = createNumberMask({
    prefix: '',
    suffix: ' R$',
    allowDecimal: true
    // This will put the dollar sign at the end, with a space.
  })


  Depositar() {
    this.transacaoService.Depositar(this.depositarForm.value()).subscribe();
  }
}
