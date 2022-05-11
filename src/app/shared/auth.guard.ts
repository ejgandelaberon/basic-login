import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {}

  canActivate() {
    if (this.authService.isLoggedIn()) return true
    this.messageService.add({severity:'error', summary:'No authorization', detail:'Please login'})
    this.router.navigate(['login'])
    return false;
  }
  
}
