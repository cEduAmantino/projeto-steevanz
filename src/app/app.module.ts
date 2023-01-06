import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutStep1Component } from './components/checkout/checkout-step1/checkout-step1.component';
import { CheckoutStep2Component } from './components/checkout/checkout-step2/checkout-step2.component';
import { CheckoutStep3Component } from './components/checkout/checkout-step3/checkout-step3.component';
import { CheckoutStep4Component } from './components/checkout/checkout-step4/checkout-step4.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CheckoutComponent,
    CheckoutStep1Component,
    CheckoutStep2Component,
    CheckoutStep4Component,
    CheckoutStep3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
