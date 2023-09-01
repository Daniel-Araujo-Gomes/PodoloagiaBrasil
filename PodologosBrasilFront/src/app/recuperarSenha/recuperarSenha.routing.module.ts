import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecuperarSenhaComponent } from "./recuperarSenha.component";

const router: Routes = [{ path: "", component: RecuperarSenhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class RecuperarSenhaRoutingModule {}
