import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-checkout-step3',
  templateUrl: './checkout-step3.component.html',
  styleUrls: ['./checkout-step3.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class CheckoutStep3Component {


  date = new FormControl(moment());
  formularioReativo: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    this.formularioReativo = this.formBuilder.group({
      numeroCartao: [null, [Validators.required, Validators.maxLength(12)]],
      dataExpiracao: [null, Validators.required],
      cvc: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })

  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  onSubmit(){
    console.log(this.formularioReativo.value);

     this.http.post('https://httpbin.org/post', JSON.stringify(this.formularioReativo.value))
    .pipe(map((dados: any) => dados))
    .subscribe(dados => { console.log(dados);
    });
  }
}
