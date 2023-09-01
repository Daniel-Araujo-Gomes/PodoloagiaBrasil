import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.scss']
})
export class LoadScreenComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  @Input() showLoadScreen: boolean = false;

  constructor() {}

  ngOnInit(): void {

  }
}
