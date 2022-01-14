/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { verDetallesClienteComponent } from './verDetallesCliente.component';

describe('verDetallesClienteComponent', () => {
  let component: verDetallesClienteComponent;
  let fixture: ComponentFixture<verDetallesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ verDetallesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(verDetallesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
