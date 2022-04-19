import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo03',
  templateUrl: './ejemplo03.component.html',
  styleUrls: ['./ejemplo03.component.scss']
})
export class Ejemplo03Component implements OnInit {

  n: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
  }

}
