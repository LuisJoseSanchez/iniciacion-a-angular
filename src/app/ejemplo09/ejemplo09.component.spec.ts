import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo09Component } from './ejemplo09.component';

describe('Ejemplo09Component', () => {
  let component: Ejemplo09Component;
  let fixture: ComponentFixture<Ejemplo09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejemplo09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
