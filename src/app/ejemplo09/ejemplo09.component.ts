import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { LISTA_EMPLEADOS } from '../lista-empleados';

@Component({
  selector: 'app-ejemplo09',
  templateUrl: './ejemplo09.component.html',
  styleUrls: ['./ejemplo09.component.scss']
})
export class Ejemplo09Component implements OnInit {

  empleados: Empleado[] = [];

  constructor() { }

  ngOnInit(): void {
    this.empleados = LISTA_EMPLEADOS;
  }

}
