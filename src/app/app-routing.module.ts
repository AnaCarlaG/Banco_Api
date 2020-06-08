import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaqueComponent } from './Transacoes/saque/saque.component';
import { DepositoComponent } from './Transacoes/deposito/deposito.component';
import { SaldoComponent } from './Transacoes/saldo/saldo.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"saque", component:SaqueComponent},
  {path:"deposito", component:DepositoComponent},
  {path:"saldo", component:SaldoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
