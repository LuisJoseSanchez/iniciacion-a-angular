import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo06Component } from './ejemplo06.component';

describe('Ejemplo06Component', () => {
  let component: Ejemplo06Component;
  let fixture: ComponentFixture<Ejemplo06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
