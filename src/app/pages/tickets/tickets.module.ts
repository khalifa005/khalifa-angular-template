import { NgModule } from '@angular/core';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketsRoutingModule } from './tickets-routing.module';

const components = [
  TicketsComponent,
  TicketsListComponent
];

@NgModule({
  imports: [
    // ThemeModule,
    TicketsRoutingModule
  ],
  declarations: [...components]
})
export class TicketsModule { }
