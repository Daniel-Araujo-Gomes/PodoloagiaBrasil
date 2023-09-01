import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Lista } from "../shared/lista/lista";
import { LoginComponent } from "../login/login.component";
import { forkJoin, Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-primeiroAcesso",
  templateUrl: "./primeiroAcesso.component.html",
  styleUrls: ["./primeiroAcesso.component.scss"],
})
export class PrimeiroAcessoComponent implements OnInit {
  /**
   * Metodo construtor da classe, este metodo é executado toda vez que a classe é chamada.
   */
  constructor(private fb: FormBuilder, private router: Router, private loginComponent: LoginComponent) {
    Promise.resolve().then(() => (this.loginComponent.subTela = true));
  }

  /**
   * Este metodo é executado na incialização da classe, depois do construtor.
   */
  ngOnInit() {}
}
