import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SaldoComponent } from './Transacoes/saldo/saldo.component';
import { SaqueComponent } from './Transacoes/saque/saque.component';
import { DepositoComponent } from './Transacoes/deposito/deposito.component';
import { TransacaoService } from './service/transacao.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SaldoComponent,
    SaqueComponent,
    DepositoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule
  ],
  providers: [TransacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
