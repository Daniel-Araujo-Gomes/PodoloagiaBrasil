import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimeiroAcessoRoutingModule } from "./primeiroAcesso.routing.module";
import { PrimeiroAcessoComponent } from "./primeiroAcesso.component";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PrimeiroAcessoComponent],
  imports: [CommonModule, PrimeiroAcessoRoutingModule, MatIconModule, ReactiveFormsModule],
})
export class PrimeiroAcessoModule {}
