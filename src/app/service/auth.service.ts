import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../pages/login-page/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:3210/users/login';
  user: string | undefined;
  errMsg: string | undefined;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  login(loginForm: Login) {
    return this.http.post<any>(this.apiUrl, loginForm)
  }

  isLoggedIn() {
    return localStorage.getItem('token')!=null
  }

  getToken() {
    return localStorage.getItem('token')||''
  }

  hasAccess() {
    let loginToken = localStorage.getItem('token')||''
    let _extractedToken = loginToken.split('.')[1]
    let _atobdata = atob(_extractedToken)
    let _finalData = JSON.parse(_atobdata)
    if (_finalData.role == 'admin') return true
    this.messageService.add({severity:'error', summary:'Access denied', detail:'Unauthorized user!'})
    return false
  }
}
