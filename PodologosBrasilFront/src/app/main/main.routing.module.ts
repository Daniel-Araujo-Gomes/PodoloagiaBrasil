import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { MainGuard } from "./main.guard";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomeModule),
      },
      { path: "**", pathMatch: "full", redirectTo: "home" },
    ],
    canActivate: [MainGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
