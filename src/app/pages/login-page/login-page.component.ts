import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from '../../service/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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
    private primengConfig: PrimeNGConfig,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
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
      this.authService.login(this.loginForm.value).subscribe({
        next: res => {
          this.messageService.add({severity:'success', summary:'Verified', detail:res.message})
          localStorage.setItem('token', res.accessToken)
          this.router.navigate(['admin'])
        },
        error: err => {
          this.messageService.add({severity:'error', summary:'Error', detail:err.error.message})
        }
      })
      this.loginForm.reset()
    } else {
      if (!this.loginForm.value.username) return this.messageService.add({severity:'error', summary:'Empty username', detail:'Username is required'})
      if (!this.loginForm.value.password) return this.messageService.add({severity:'error', summary:'Empty password', detail:'Password is required'})
    }
  }

}
