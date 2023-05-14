import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbLoginComponent } from './componnets/login/login.component';
import { NbRegisterComponent } from './componnets/register/register.component';
import { NbRequestPasswordComponent } from './componnets/request-password/request-password.component';
import { AuthComponent } from './auth.component';
import { NbLogoutComponent } from './componnets/logout/logout.component';


export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
