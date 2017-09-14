import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo08Component } from './ejemplo08.component';

describe('Ejemplo08Component', () => {
  let component: Ejemplo08Component;
  let fixture: ComponentFixture<Ejemplo08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
