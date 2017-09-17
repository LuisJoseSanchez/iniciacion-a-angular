import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo02',
  templateUrl: './ejemplo02.component.html',
  styleUrls: ['./ejemplo02.component.css']
})
export class Ejemplo02Component implements OnInit {

  x: number;
  y: number;
  palabra: string;
  persona: object;

  constructor() { }

  ngOnInit() {
    this.x = 23;
    this.y = 9;
    this.palabra = "meetup";
    this.persona = {
      nombre: "Alan Brito",
      puesto: "desarrollador full-stack",
      sueldo: 2000
    };
  }
}
