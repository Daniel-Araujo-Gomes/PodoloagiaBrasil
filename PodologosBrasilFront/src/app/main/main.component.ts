import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { menus } from "../shared/menu/menu-data";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  // Variaveis de icone, que utilizamos na tela de home.

  // variable that controls the loading screen.
  LoadScreen = false;
  // variavel que controla qual o item do menu está ativo.
  module = "";
  // variavel que irá apresentar o conteudo no rodapé.
  footer = "";
  // user$: Observable<User>;
  user: string;

  menusData = menus;

  /**
   * Metodo construtor da classe, este metodo é executado toda vez que a classe é chamada.
   * @param router: Router
   */
  constructor(private router: Router) {}

  /**
   * Este metodo é executado na incialização da classe, depois do construtor.
   */
  ngOnInit() {
    this.user = "Daniel Araujo Gomes";
  }

  /**
   * Esse metodo é usado para apresentar o menu principal do sistema.
   * @param e: Event - Html
   */
  onMenuLateralShow(e: Event): void {
    e.stopPropagation();

    const sidenav = document.getElementById("sidenav").classList;

    sidenav.contains("_sidenav-show") ? sidenav.remove("_sidenav-show") : sidenav.add("_sidenav-show");
  }

  onMenuLateralSubitem(e: Event): void {
    e.stopPropagation();
  }
  /**
   * Esse metodo server para encerrar o sistema.
   */
  logout(): void {
    // this.userService.logout();
    this.router.navigate([""]).then();
  }

  navigate(modulo: string, storage?: string): void {
    sessionStorage.removeItem(storage);
    sessionStorage.removeItem(`${storage}Query`);
    this.router.navigate([modulo]).then();
    const sidenav = document.getElementById("sidenav").classList;
    sidenav.contains("_sidenav-show") ? sidenav.remove("_sidenav-show") : sidenav.add("_sidenav-show");
  }

  /**
   * Esse metodo é para esconder o menu principal dosistema.
   */
  onMenuLateralHide(): void {
    document.getElementById("sidenav").classList.remove("_sidenav-show");
  }
}
