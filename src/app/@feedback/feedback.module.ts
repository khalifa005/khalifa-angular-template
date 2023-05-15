import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';


import { FormsModule, ReactiveFormsModule, FormsModule as ngFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPatternModule } from 'ngx-pattern';
import { NgxAuthRoutingModule } from '../@auth/auth-routing.module';
import { FeedbackComponent } from './Feedback/feedback.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    ThemeModule,

    ngFormsModule,
    CommonModule,
    TranslateModule,
    NbLayoutModule,
    NgxAuthRoutingModule,
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
    NgxPatternModule,
    NbButtonModule,
    NbUserModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    FeedbackComponent,
    StarRatingComponent
  ],
})
export class FeedbackModule {


 }
