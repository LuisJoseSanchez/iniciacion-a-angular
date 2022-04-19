import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo07',
  templateUrl: './ejemplo07.component.html',
  styleUrls: ['./ejemplo07.component.scss']
})
export class Ejemplo07Component implements OnInit {

  numeros: number[] = [];
  frutas: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
  }

}
