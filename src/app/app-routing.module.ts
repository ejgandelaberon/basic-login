import { RoleGuard } from './shared/role.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UserAccountComponent } from './pages/admin/contents/user-account/user-account.component';
import { UsersComponent } from './pages/admin/contents/users/users.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'admin/users', pathMatch:'full'},
  {path:'admin', redirectTo:'admin/users', pathMatch:'full'},
  {path:'login', component:LoginPageComponent},
  {path:'admin', component:AdminComponent,
    children:[
      {path:'users', component:UsersComponent},
      {path:'user-account', component:UserAccountComponent, canActivate:[RoleGuard]}
    ],
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
