import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  header: string = 'emsephron';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.loginForm.reset();
    }
  }

}
