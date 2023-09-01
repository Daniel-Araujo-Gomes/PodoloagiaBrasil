import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Input() subTela: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  navigate(modulo: string): void {
    this.router.navigate([modulo], { skipLocationChange: true }).then();
  }
}
