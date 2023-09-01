import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RecuperarSenhaRoutingModule } from "./recuperarSenha.routing.module";
import { RecuperarSenhaComponent } from "./recuperarSenha.component";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [RecuperarSenhaComponent],
  imports: [CommonModule, RecuperarSenhaRoutingModule, MatIconModule, ReactiveFormsModule],
})
export class RecuperarSenhaModule {}
