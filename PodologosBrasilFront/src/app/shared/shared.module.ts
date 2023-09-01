import { AlertaComponent } from "./alerta/alerta.component";
import { ConfirmeAlertaComponent } from "./confirme-alerta/confirme-alerta.component";
import { LoadScreenComponent } from "./load-screen/load-screen.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AbertoPipe } from "./Pipe/AbertoPipe";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [AlertaComponent, ConfirmeAlertaComponent, AbertoPipe, LoadScreenComponent, MenuComponent],
  imports: [CommonModule],
  exports: [AlertaComponent, ConfirmeAlertaComponent, AbertoPipe, LoadScreenComponent, MenuComponent],
  entryComponents: [AlertaComponent, ConfirmeAlertaComponent, LoadScreenComponent, MenuComponent],
})
export class SharedModule {}
