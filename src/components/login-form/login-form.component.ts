import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  formSubmitted = false;
  
  email: string = '';
  password: string = '';
  loginForm2: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm2 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm2.valid) {
      console.log('Login validé');
    } else {
      console.log('Le formulaire est invalide');
    }
  }
}
