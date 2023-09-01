import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrimeiroAcessoComponent } from "./primeiroAcesso.component";

const router: Routes = [{ path: "", component: PrimeiroAcessoComponent }];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class PrimeiroAcessoRoutingModule {}
