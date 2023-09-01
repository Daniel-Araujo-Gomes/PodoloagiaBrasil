import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main.routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, MatIconModule, SharedModule],
})
export class MainModule {}
