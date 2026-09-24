/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrustBarComponent } from './trustBar.component';

describe('TrustBarComponent', () => {
  let component: TrustBarComponent;
  let fixture: ComponentFixture<TrustBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
