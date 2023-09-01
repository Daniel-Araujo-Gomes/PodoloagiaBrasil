import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AcessoRoutingModule } from "./acesso.routing.module";
import { AcessoComponent } from "./acesso.component";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AcessoComponent],
  imports: [CommonModule, AcessoRoutingModule, MatIconModule, ReactiveFormsModule],
})
export class AcessoModule {}
