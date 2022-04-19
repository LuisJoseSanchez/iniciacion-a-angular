import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo06',
  templateUrl: './ejemplo06.component.html',
  styleUrls: ['./ejemplo06.component.scss']
})
export class Ejemplo06Component implements OnInit {

  euros: number = 0;
  pesetas: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  limpia() {
    this.euros = 0;
    this.pesetas = 0;
  }

  actualizaPesetas() {
    this.pesetas = this.euros * 166.386;
  }

  actualizaEuros() {
    this.euros = this.pesetas / 166.386;
  }
}
