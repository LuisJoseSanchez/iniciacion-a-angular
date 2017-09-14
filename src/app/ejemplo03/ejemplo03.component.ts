import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo03',
  templateUrl: './ejemplo03.component.html',
  styleUrls: ['./ejemplo03.component.css']
})
export class Ejemplo03Component implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

}
