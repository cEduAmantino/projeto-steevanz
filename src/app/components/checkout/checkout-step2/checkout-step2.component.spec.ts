import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CheckoutStep2Component } from './checkout-step2.component';

describe('CheckoutStep2Component', () => {
  let component: CheckoutStep2Component;
  let fixture: ComponentFixture<CheckoutStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
