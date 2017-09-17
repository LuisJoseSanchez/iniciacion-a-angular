import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { listaEmpleados } from '../lista_empleados';

@Component({
  selector: 'app-ejemplo09',
  templateUrl: './ejemplo09.component.html',
  styleUrls: ['./ejemplo09.component.css']
})
export class Ejemplo09Component implements OnInit {

  empleados: Empleado[];

  constructor() {
    this.empleados = listaEmpleados;
  }

  ngOnInit() {
  }

}
