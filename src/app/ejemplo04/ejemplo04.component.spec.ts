import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo04Component } from './ejemplo04.component';

describe('Ejemplo04Component', () => {
  let component: Ejemplo04Component;
  let fixture: ComponentFixture<Ejemplo04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
