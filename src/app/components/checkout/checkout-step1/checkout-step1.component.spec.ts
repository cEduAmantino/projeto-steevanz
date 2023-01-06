import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStep1Component } from './checkout-step1.component';

describe('CheckoutStep1Component', () => {
  let component: CheckoutStep1Component;
  let fixture: ComponentFixture<CheckoutStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
