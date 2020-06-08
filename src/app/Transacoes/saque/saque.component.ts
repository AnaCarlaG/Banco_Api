import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TransacaoService } from 'src/app/service/transacao.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';


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
  // First, you need to create the `numberMask` with your desired configurations
  public numberMask = createNumberMask({
    prefix: '',
    suffix: ' R$',
    allowDecimal: true
    // This will put the dollar sign at the end, with a space.
  })


  Depositar() {
    this.transacaoService.Saque(this.saqueForm.value()).subscribe();
  }
}
