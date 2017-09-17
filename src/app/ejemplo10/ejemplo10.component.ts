import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo10',
  templateUrl: './ejemplo10.component.html',
  styleUrls: ['./ejemplo10.component.css']
})
export class Ejemplo10Component implements OnInit {

  temperatura;

  constructor() { }

  ngOnInit() {
    this.temperatura = Math.floor(Math.random() * 20 + 1);
  }

  incrementaValor(incremento: number) {
    this.temperatura += incremento;
  }
}
