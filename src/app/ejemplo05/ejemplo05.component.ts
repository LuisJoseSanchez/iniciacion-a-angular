import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo05',
  templateUrl: './ejemplo05.component.html',
  styleUrls: ['./ejemplo05.component.scss']
})
export class Ejemplo05Component implements OnInit {

  palabra: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  limpiaTexto() {
    this.palabra = "";
  }
}
