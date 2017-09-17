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

La página principal en la que se cargan todos los ejemplos es `app.component.html`:

```html
<app-ejemplo01></app-ejemplo01><hr>
<app-ejemplo02></app-ejemplo02><hr>
<app-ejemplo03></app-ejemplo03><hr>
<app-ejemplo03></app-ejemplo03><hr>
<app-ejemplo03></app-ejemplo03><hr>
<app-ejemplo04></app-ejemplo04><hr>
<app-ejemplo05></app-ejemplo05><hr>
<app-ejemplo06></app-ejemplo06><hr>
<app-ejemplo07></app-ejemplo07><hr>
<app-ejemplo08></app-ejemplo08><hr>
<app-ejemplo09></app-ejemplo09><hr>
<app-ejemplo10></app-ejemplo10><hr>
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
<h1>Ejemplo 4</h1>

<h2>Eventos (el evento click).</h2>

<button (click)="generaValor()">Genera valor</button>
<button (click)="incrementaValor()">+</button>
<button (click)="decrementaValor()">-</button>

<h1>{{ n }}</h1>
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

`ejemplo06.component.html`

```html
<h1>Ejemplo 6</h1>

<h2>Convertidor euros/pesetas</h2>

Euros:
<input
  #entradaEuros
  (keyup)="actualizaPesetas(entradaEuros.value)"
  [value]="euros"
  type="text">
<br>

Pesetas:
<input
  #entradaPesetas
  (keyup)="actualizaEuros(entradaPesetas.value)"
  [value]="pesetas"
  type="text">
<br>

<button (click)="limpia()">Reset</button>
```

`ejemplo06.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo06',
  templateUrl: './ejemplo06.component.html',
  styleUrls: ['./ejemplo06.component.css']
})
export class Ejemplo06Component implements OnInit {

  euros: number;
  pesetas: number;

  constructor() { }

  ngOnInit() {
    this.limpia();
  }

  limpia() {
    this.euros = 0;
    this.pesetas = 0;
  }

  actualizaPesetas(n: number) {
    this.pesetas = n * 166.386;
  }

  actualizaEuros(n: number) {
    this.euros = n / 166.386;
  }
}
```

<img src="img/ejemplo06.png">

## Ejemplo 7 - Directiva estructural *ngFor.

`ejemplo07.component.html`

```html
<h1>Ejemplo 7</h1>

<h2>Directiva estructural *ngFor.</h2>

<b>Números:</b>
<p
  *ngFor="let n of numeros">
  {{ n }}
</p>

<b>Frutas:</b>
<p
  *ngFor="let f of frutas">
  {{ f }}
</p>

```

`ejemplo07.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo07',
  templateUrl: './ejemplo07.component.html',
  styleUrls: ['./ejemplo07.component.css']
})
export class Ejemplo07Component implements OnInit {

  numeros: number[];
  frutas: string[];

  constructor() { }

  ngOnInit() {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
  }

}
```

<img src="img/ejemplo07.png">

## Ejemplo 8 - Directiva estructural *ngFor. Directiva ngModel.

`app.module.ts`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Ejemplo01Component } from './ejemplo01/ejemplo01.component';
import { Ejemplo02Component } from './ejemplo02/ejemplo02.component';
import { Ejemplo03Component } from './ejemplo03/ejemplo03.component';
import { Ejemplo04Component } from './ejemplo04/ejemplo04.component';
import { Ejemplo05Component } from './ejemplo05/ejemplo05.component';
import { Ejemplo06Component } from './ejemplo06/ejemplo06.component';
import { Ejemplo07Component } from './ejemplo07/ejemplo07.component';
import { Ejemplo08Component } from './ejemplo08/ejemplo08.component';
import { Ejemplo09Component } from './ejemplo09/ejemplo09.component';
import { Ejemplo10Component } from './ejemplo10/ejemplo10.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo01Component,
    Ejemplo02Component,
    Ejemplo03Component,
    Ejemplo04Component,
    Ejemplo05Component,
    Ejemplo06Component,
    Ejemplo07Component,
    Ejemplo08Component,
    Ejemplo09Component,
    Ejemplo10Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

`ejemplo08.component.html`

```html
<h1>Ejemplo 8</h1>

<h2>Directiva estructural *ngFor. Directiva ngModel.</h2>

<b>Números:</b>
<span
  *ngFor="let n of numeros">
  {{ n }}
</span>

<br>

Inserta número:
<input [(ngModel)]="numero"  (keyup.enter)="insertaNumero()" type="text">

<br><br>

<b>Frutas:</b>
<span
  *ngFor="let f of frutas">
  {{ f }}
</span>

<br>

Inserta fruta:
<input [(ngModel)]="fruta"  (keyup.enter)="insertaFruta()" type="text">

<br><br>

<b>Notas</b>
<p>
  Para utilizar <b>ngModel</b> hay que importar <b>FormsModule</b> en <b>app.module.ts</b> y añadirlo al import de <b>@NgModule</b>
</p>
```

`ejemplo08.component.ts`

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo08',
  templateUrl: './ejemplo08.component.html',
  styleUrls: ['./ejemplo08.component.css']
})
export class Ejemplo08Component implements OnInit {

  numeros: number[];
  frutas: string[];

  numero: number;
  fruta: string;

  constructor() { }

  ngOnInit() {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
  }

  insertaNumero() {
    this.numeros.push(this.numero);
    this.numero = null; // limpia el input
  }

  insertaFruta() {
    this.frutas.push(this.fruta);
    this.fruta = null; // limpia el input
  }
}
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
