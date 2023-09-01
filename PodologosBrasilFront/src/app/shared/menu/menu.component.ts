import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "menus",
  template: `
    <li class="nav-item" *ngFor="let menu of menus">
      <div class="accordions" *ngIf="menu.menu">
        <div class="accordion-item" (click)="onMenuLateralSubitem($event)">
          <label for="accordion-{{ menu.nome }}">
            <span class="_menuLateral-itens _title" [ngClass]="{ '{{ menu.nomeColor }}': module == 'Combos' }">
              <div class="_menuLateralItemIcone _box-center">
                <i class="{{ menu.icone }} {{ menu.iconeColor }}"></i>
              </div>
              <div class="_menuLateralItemTitulo _box-left ps-2">
                <span class="{{ menu.nomeColor }} _reticencia">{{ menu.nome }}</span>
              </div>
              <div class="_menuLateralItemIndicador _box-right pe-2">
                <i class="{{ menu.seta }} {{ menu.setaColor }}"></i>
              </div>
            </span>
          </label>
          <input type="checkbox" name="accordion" id="accordion-{{ menu.nome }}" />
          <div class="accordion-content">
            <ul class="nav flex-column">
              <menus [menus]="menu.menu" *ngIf="menu.menu"></menus>
            </ul>
          </div>
        </div>
      </div>

      <button type="button" class="_menuLateral-itens _title" (click)="navigate('{{ menu.route }}', '{{ menu.modulo }}')" [ngClass]="{ '{{ menu.nomeColor }}': module == 'vaga' }" *ngIf="!menu.menu">
        <div class="_menuLateralItemIcone _box-center">
          <i class="{{ menu.icone }} {{ menu.iconeColor }}"></i>
        </div>
        <div class="_menuLateralItemTitulo _box-left ps-2">
          <span class="{{ menu.nomeColor }} _reticencia">{{ menu.nome }}</span>
        </div>
        <div class="_menuLateralItemIndicador _box-right pe-2">
          <i class="{{ menu.seta }} {{ menu.setaColor }}"></i>
        </div>
      </button>
    </li>
  `,
})
export class MenuComponent {
  @Input() menus;

  constructor(private router: Router) {}

  onMenuLateralSubitem(e: Event): void {
    e.stopPropagation();
  }

  navigate(modulo: string, storage?: string): void {
    sessionStorage.removeItem(storage);
    sessionStorage.removeItem(`${storage}Query`);
    this.router.navigate([modulo]).then();
    const sidenav = document.getElementById("sidenav").classList;
    sidenav.contains("_sidenav-show") ? sidenav.remove("_sidenav-show") : sidenav.add("_sidenav-show");
  }
}
