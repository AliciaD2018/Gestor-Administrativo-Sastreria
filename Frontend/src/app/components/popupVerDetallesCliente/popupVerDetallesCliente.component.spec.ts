/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupVerDetallesClienteComponent } from './popupVerDetallesCliente.component';

describe('PopupVerDetallesClienteComponent', () => {
  let component: PopupVerDetallesClienteComponent;
  let fixture: ComponentFixture<PopupVerDetallesClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupVerDetallesClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupVerDetallesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
