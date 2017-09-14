import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo08',
  templateUrl: './ejemplo08.component.html',
  styleUrls: ['./ejemplo08.component.css']
})
export class Ejemplo08Component implements OnInit {

  numeros: number[];
  frutas: string[];

  numero: any;

  constructor() { }

  ngOnInit() {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
  }

  insertaNumero() {
    this.numeros.push(this.numero);
    this.numero = ""; // limpia el input
  }
}
