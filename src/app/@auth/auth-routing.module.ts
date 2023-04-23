import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbLoginComponent } from './componnets/login/login.component';
import { NbRegisterComponent } from './componnets/register/register.component';


export const routes: Routes = [
  {
    path: '',
    component: NbLoginComponent,
  },
  {
    path: 'login',
    component: NbLoginComponent,
  },
  {
    path: 'register',
    component: NbRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
