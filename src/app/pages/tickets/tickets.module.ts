import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

const components = [
  TicketsComponent,
  TicketsListComponent,
  AddTicketComponent

];

@NgModule({
  imports: [
    //  ThemeModule,
    // SharedModule,
    CommonModule,
    TicketsRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    //ThemeModule,
    // ngFormsModule,

    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    // MatFormFieldModule,
    // MatInputModule,
  ],
  declarations: [...components]
})
export class TicketsModule { }
