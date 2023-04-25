import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  TicketsComponent,
  TicketsListComponent,
  AddTicketComponent

];

@NgModule({
  imports: [
    // ThemeModule,
    TicketsRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [...components]
})
export class TicketsModule { }
