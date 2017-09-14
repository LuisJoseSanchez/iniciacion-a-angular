import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo05Component } from './ejemplo05.component';

describe('Ejemplo05Component', () => {
  let component: Ejemplo05Component;
  let fixture: ComponentFixture<Ejemplo05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
