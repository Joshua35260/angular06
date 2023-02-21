import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { OrderForm } from './orderForm';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([]) // FormArray control
  });

  constructor(private fb: FormBuilder) 
  { }
    
   
  addPayment() {
    // create FormGroup with two FormControl
    const paymentForm = this.fb.group({
      date: ['', Validators.required, this.minDateValidator(new Date())],
      amount: ['', Validators.required]
    });
    // parse abstract control to FormArray
    const payments = this.orderForm.get('payments') as FormArray;
    // add new FormGroup to control 'payments'
    payments.push(paymentForm);
  }
   onSubmit() {
    // Get form value as JSON object
    console.log('orderForm submitted : ', this.orderForm.value);
  }

  getPayments(): FormArray {
    return this.orderForm.get('payments') as FormArray;
  }

minDateValidator(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // parse control value to Date
      const date = new Date(control.value);
      // check if control value is superior to date given in parameter
      if (minDate.getTime() < date.getTime()) {
        return null;
      } else {
        // 'min' is the error key 
        return { 'min': { value: control.value, expected: minDate } };
  
      }
    };
  }


  ngOnInit() {
    // get Observable from FormGroup
    this.orderForm.valueChanges
      // listen to value change
      .subscribe(value => {
        console.log('orderForm value changes : ', value);
      });
  }

}
  

