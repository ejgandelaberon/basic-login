import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: []
})
export class AdminComponent implements OnInit {
  currentLoggedUser: string | undefined;
  userRole: string | undefined;

  constructor(private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.setLoggedUser()
  }

  logout() {
    this.confirmationService.confirm({
      message: 'Do you want to logout?',
      header: 'Logout Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirmed', detail:'You have logged out'})
        localStorage.removeItem('token')
        this.router.navigate(['login'])
      },
      reject: () => {
        this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'})
      }
    })
  }

  setLoggedUser() {
    let loginToken = localStorage.getItem('token')||''
    let _extractedToken = loginToken.split('.')[1]
    let _atobdata = atob(_extractedToken)
    let _finalData = JSON.parse(_atobdata)
    this.currentLoggedUser = _finalData.fullname
    this.userRole = _finalData.role.toUpperCase()
  }

}
