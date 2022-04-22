import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/admin/contents/users/users.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'admin', redirectTo:'admin/users', pathMatch:'full'},
  {path:'login', component:LoginPageComponent},
  {path:'admin', component:AdminComponent,
    children:[
      {path:'users', component:UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
