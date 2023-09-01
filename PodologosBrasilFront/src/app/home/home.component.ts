import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Lista } from "../shared/lista/lista";
import { MainComponent } from "../main/main.component";
import { forkJoin, Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  /**
   * Metodo construtor da classe, este metodo é executado toda vez que a classe é chamada.
   */
  constructor(private fb: FormBuilder, private router: Router, private mainComponent: MainComponent) {}

  /**
   * Este metodo é executado na incialização da classe, depois do construtor.
   */
  ngOnInit() {
    Promise.resolve().then(() => (this.mainComponent.LoadScreen = false));
  }
}
