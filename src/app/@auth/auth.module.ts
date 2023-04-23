import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbLoginComponent } from './componnets/login/login.component';
import { NbRegisterComponent } from './componnets/register/register.component';


@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbButtonModule,
    NgxAuthRoutingModule,
    NbCheckboxModule
  ],
  declarations: [
    // ... here goes our new components
    NbLoginComponent,
    NbRegisterComponent
  ],
})
export class NgxAuthModule {
}
