import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo02Component } from './ejemplo02.component';

describe('Ejemplo02Component', () => {
  let component: Ejemplo02Component;
  let fixture: ComponentFixture<Ejemplo02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
