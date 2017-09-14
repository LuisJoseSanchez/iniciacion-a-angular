import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo04',
  templateUrl: './ejemplo04.component.html',
  styleUrls: ['./ejemplo04.component.css']
})
export class Ejemplo04Component implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }

  generaValor() {
    this.n = this.n = Math.floor(Math.random() * 10 + 1);
  }

  incrementaValor() {
    this.n++;
  }

  decrementaValor() {
    this.n--;
  }
}
