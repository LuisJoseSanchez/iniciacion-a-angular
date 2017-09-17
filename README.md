# Iniciación a Angular. Ejemplos.

Para probar los ejemplos de este repositorio, teclea los siguientes comandos:

1. Clona este repositorio en local:

```console
git clone https://github.com/LuisJoseSanchez/iniciacion-a-angular.git
```

2. Entra en el directorio del proyecto:

```console
cd iniciacion-a-angular
```

3. Instala las dependencias:

```console
npm install
```

4. Lanza el servidor para ver la aplicación en http://localhost:4200/:

```console
ng serve
```

## Ejemplo 1 - Estructura de un componente. Etiqueta (selector). HTML y CSS.

`ejemplo01.component.css`

```css
h1 {
  color: green;
}

b {
  color: blue;
}
```

`ejemplo01.component.html`

```html
<h1>Ejemplo 1</h1>

<h2>Estructura de un componente. Etiqueta (selector). HTML y CSS.</h2>

<p>
  <b>Hola mundo</b>, soy el ejemplo número 1.
</p>
```

<img src="img/ejemplo01.png">

## Ejemplo 2 - Interpolación. Filtros.

`ejemplo01.component.html`

```html
<h1>Ejemplo 2</h1>

<h2>Interpolación. Filtros.</h2>

<p>x vale {{ x }}</p>
<p>y vale {{ y }}</p>
<p>x + y vale {{ x + y }}</p>
<p>palabra vale {{ palabra }}</p>
<p>persona vale {{ persona | json}}</p>
<p>nombre: {{ persona.nombre | uppercase }}</p>
<p>puesto: {{ persona.puesto }}</p>
```

```typescript
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
```

<img src="img/ejemplo02.png">

## Ejemplo 3 - Repitiendo un componente.

<img src="img/ejemplo03.png">

## Ejemplo 4 - Eventos (el evento click).

<img src="img/ejemplo04.png">

## Ejemplo 5 - Entrada de datos con "input"

<img src="img/ejemplo05.png">

## Ejemplo 6 - Convertidor euros/pesetas.

<img src="img/ejemplo06.png">

## Ejemplo 7 - Directiva estructural *ngFor.

<img src="img/ejemplo07.png">

## Ejemplo 8 - Directiva estructural *ngFor. Directiva ngModel.

<img src="img/ejemplo08.png">

## Ejemplo 9 - Directiva *ngFor. Uso de clases.

<img src="img/ejemplo09.png">

## Ejemplo 10 - Directiva estructural *ngIf

<img src="img/ejemplo10.png">
