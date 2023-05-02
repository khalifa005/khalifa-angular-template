import {
  NbAlertModule,
  NbLayoutModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbThemeModule,
  NbLayoutDirection,
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from '../@theme/theme.module';
import { NgxAuthRoutingModule, routes } from './auth-routing.module';
import { NbLoginComponent } from './componnets/login/login.component';
import { NbRegisterComponent } from './componnets/register/register.component';
import { NbRequestPasswordComponent } from './componnets/request-password/request-password.component';
import { AuthComponent } from './auth.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    TranslateModule,
    NbLayoutModule,
    NbCardModule,
    NbButtonModule,
    NgxAuthRoutingModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    NbInputModule,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    RouterModule,
  ],
  declarations: [
    // ... here goes our new components
    AuthComponent,
    NbLoginComponent,
    NbRegisterComponent,
    NbRequestPasswordComponent,

  ],
})
export class NgxAuthModule {
}
