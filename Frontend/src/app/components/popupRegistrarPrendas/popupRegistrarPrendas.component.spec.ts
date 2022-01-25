/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PopupRegistrarPrendasComponent } from './popupRegistrarPrendas.component';

describe('PopupPrendasComponent', () => {
  let component: PopupRegistrarPrendasComponent;
  let fixture: ComponentFixture<PopupRegistrarPrendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRegistrarPrendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRegistrarPrendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
