import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutStep1Component } from './checkout/checkout-step1/checkout-step1.component';
import { CheckoutStep2Component } from './checkout/checkout-step2/checkout-step2.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CheckoutStep4Component } from './checkout/checkout-step4/checkout-step4.component';
import { CheckoutStep3Component } from './checkout/checkout-step3/checkout-step3.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CheckoutComponent,
    CheckoutStep1Component,
    CheckoutStep2Component,
    FormDebugComponent,
    CheckoutStep4Component,
    CheckoutStep3Component
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    AppMaterialModule,

  ],
  exports:[
    ComponentsModule
  ]
})
export class ComponentsModule { }
