import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbIconModule } from '@nebular/theme';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  TicketsComponent,
  TicketsListComponent,
  AddTicketComponent

];

@NgModule({
  imports: [
    //  ThemeModule,
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
