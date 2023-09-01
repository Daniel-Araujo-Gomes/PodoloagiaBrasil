import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home.routing.module";
import { HomeComponent } from "./home.component";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatIconModule, ReactiveFormsModule],
})
export class HomeModule {}
