import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { LoginGuard } from "./login.guard";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [
      {
        path: "acesso",
        loadChildren: () => import("../acesso/acesso.module").then((m) => m.AcessoModule),
      },
      {
        path: "primeiroAcesso",
        loadChildren: () => import("../primeiroAcesso/primeiroAcesso.module").then((m) => m.PrimeiroAcessoModule),
      },
      {
        path: "recuperarSenha",
        loadChildren: () => import("../recuperarSenha/recuperarSenha.module").then((m) => m.RecuperarSenhaModule),
      },
      { path: "**", pathMatch: "full", redirectTo: "acesso" },
    ],
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
