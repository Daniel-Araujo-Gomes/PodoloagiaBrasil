import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcessoComponent } from "./acesso.component";

const router: Routes = [{ path: "", component: AcessoComponent }];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class AcessoRoutingModule {}
