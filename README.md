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

`ejemplo02.component.html`

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

`ejemplo02.component.ts`

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

`ejemplo03.component.html`

```html
<h1>Ejemplo 3</h1>

<h2>Repitiendo un componente.</h2>

<p>
  Número aleatorio entre 1 y 10.
</p>

<h1>{{ n }}</h1>
```

`ejemplo03.component.ts`

```typescript
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
```

<img src="img/ejemplo03.png">

## Ejemplo 4 - Eventos (el evento click).

`ejemplo04.component.html`

```html
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
```

`ejemplo04.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo04',
  templateUrl: './ejemplo04.component.html',
  styleUrls: ['./ejemplo04.component.css']
})
export class Ejemplo04Component implements OnInit {

  n: number;

  constructor() { }

  ngOnInit() {
    this.n = 0;
  }

  generaValor() {
    this.n = this.n = Math.floor(Math.random() * 10 + 1);
  }

  incrementaValor() {
    this.n++;
  }

  decrementaValor() {
    this.n--;
  }
}
```

<img src="img/ejemplo04.png">

## Ejemplo 5 - Entrada de datos con "input"

`ejemplo05.component.html`

```html
<h1>Ejemplo 5</h1>

<h2>Entrada de datos con "input"</h2>

<input
  #entrada
  (keyup)="actualizaPalabra(entrada.value)"
  [value]="palabra"
  type="text">

<button (click)="limpiaTexto()">Reset</button>

<h1>{{ palabra | uppercase }}</h1>
```

`ejemplo05.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo05',
  templateUrl: './ejemplo05.component.html',
  styleUrls: ['./ejemplo05.component.css']
})
export class Ejemplo05Component implements OnInit {

  palabra: string;

  constructor() { }

  ngOnInit() {
    this.palabra = "";
  }

  actualizaPalabra(cadena: string) {
    this.palabra = cadena;
  }

  limpiaTexto() {
    this.palabra = "";
  }
}
```

<img src="img/ejemplo05.png">

## Ejemplo 6 - Convertidor euros/pesetas.

`ejemplo03.component.html`

```html
```

`ejemplo03.component.ts`

```typescript
```

<img src="img/ejemplo06.png">

## Ejemplo 7 - Directiva estructural *ngFor.

`ejemplo03.component.html`

```html
```

`ejemplo03.component.ts`

```typescript
```

<img src="img/ejemplo07.png">

## Ejemplo 8 - Directiva estructural *ngFor. Directiva ngModel.

`ejemplo03.component.html`

```html
```

`ejemplo03.component.ts`

```typescript
```

<img src="img/ejemplo08.png">

## Ejemplo 9 - Directiva *ngFor. Uso de clases.

`ejemplo03.component.html`

```html
```

`ejemplo03.component.ts`

```typescript
```

<img src="img/ejemplo09.png">

## Ejemplo 10 - Directiva estructural *ngIf

`ejemplo03.component.html`

```html
```

`ejemplo03.component.ts`

```typescript
```

<img src="img/ejemplo10.png">
