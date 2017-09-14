import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo06',
  templateUrl: './ejemplo06.component.html',
  styleUrls: ['./ejemplo06.component.css']
})
export class Ejemplo06Component implements OnInit {

  euros: number;
  pesetas: number;

  constructor() { }

  ngOnInit() {
    this.limpia();
  }

  limpia() {
    this.euros = 0;
    this.pesetas = 0;
  }

  actualizaPesetas(n: number) {
    this.pesetas = n * 166.386;
  }

  actualizaEuros(n: number) {
    this.euros = n / 166.386;
  }
}
