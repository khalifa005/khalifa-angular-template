import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule, NbAlertModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const components = [
  TicketsComponent,
  TicketsListComponent,
  AddTicketComponent

];

@NgModule({
  imports: [
    // themeModule,
    // SharedModule,
    CommonModule,
    TicketsRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    ThemeModule,
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
    Ng2SmartTableModule,
    // MatTableModule,
    // MatPaginatorModule,
    // MatSortModule,

    // MatFormFieldModule,
    // MatInputModule,
    NbAlertModule,
    FormsModule,
  ],
  declarations: [...components]
})
export class TicketsModule { }
