import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Paises {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-checkout-step2',
  templateUrl: './checkout-step2.component.html',
  styleUrls: ['./checkout-step2.component.scss']
})
export class CheckoutStep2Component {

  formularioReativo: FormGroup;

  paises: Paises[] = [
    {value: 'portugal-0', viewValue: 'Portugal'},
    {value: 'brasil-1', viewValue: 'Brasil'},
    {value: 'italia-2', viewValue: 'Italia'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) {

    this.formularioReativo = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.maxLength(9)]],
      country: [null, Validators.required],
      location: [null, Validators.required],
      address: [null, Validators.required],
      postalCode: [null, Validators.required],
      vatNumber: [null, Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required],
      message: [null, [Validators.required, Validators.maxLength(50)]],
      checkBoxStep2: [null, Validators.required]
    })


  }

  onSubmit() {

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formularioReativo.value))
      .pipe(map((dados: any) => dados))
      .subscribe(dados => {
        console.log(dados);
      });

  }

  // input nome
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

}
