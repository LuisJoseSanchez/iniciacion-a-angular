import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo07Component } from './ejemplo07.component';

describe('Ejemplo07Component', () => {
  let component: Ejemplo07Component;
  let fixture: ComponentFixture<Ejemplo07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
