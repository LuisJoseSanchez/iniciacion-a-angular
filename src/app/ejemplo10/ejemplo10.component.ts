import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo10',
  templateUrl: './ejemplo10.component.html',
  styleUrls: ['./ejemplo10.component.scss']
})
export class Ejemplo10Component implements OnInit {

  temperatura: number = Math.floor(Math.random() * 20 + 1);

  constructor() { }

  ngOnInit(): void {
  }

  incrementaValor(incremento: number) {
    this.temperatura += incremento;
  }
}
