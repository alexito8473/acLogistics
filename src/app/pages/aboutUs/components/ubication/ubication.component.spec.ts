/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UbicationComponent } from './ubication.component';

describe('UbicationComponent', () => {
  let component: UbicationComponent;
  let fixture: ComponentFixture<UbicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
