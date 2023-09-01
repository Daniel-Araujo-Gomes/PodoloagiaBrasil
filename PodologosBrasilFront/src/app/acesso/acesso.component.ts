import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Lista } from "../shared/lista/lista";
import { MainComponent } from "../main/main.component";
import { forkJoin, Observable } from "rxjs";
import { Router } from "@angular/router";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-acesso",
  templateUrl: "./acesso.component.html",
  styleUrls: ["./acesso.component.scss"],
})
export class AcessoComponent implements OnInit {
  /**
   * Metodo construtor da classe, este metodo é executado toda vez que a classe é chamada.
   */
  constructor(private fb: FormBuilder, private router: Router, private loginComponent: LoginComponent) {
    Promise.resolve().then(() => (this.loginComponent.subTela = false));
  }

  /**
   * Este metodo é executado na incialização da classe, depois do construtor.
   */
  ngOnInit() {}

  navigate(modulo: string): void {
    this.router.navigate([modulo], { skipLocationChange: true }).then();
  }
}
