import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
