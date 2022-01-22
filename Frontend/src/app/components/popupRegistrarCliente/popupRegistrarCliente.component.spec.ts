/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupRegistrarClienteComponent } from './popupRegistrarCliente.component';

describe('PopupRegistrarClienteComponent', () => {
  let component: PopupRegistrarClienteComponent;
  let fixture: ComponentFixture<PopupRegistrarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRegistrarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRegistrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
