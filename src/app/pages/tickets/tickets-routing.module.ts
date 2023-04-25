import { ChildAuthGuard } from './../../@auth/guards/child-auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { AuthGuard } from '../../@auth/guards/auth.guard';
import { AddTicketComponent } from './add-ticket/add-ticket.component';


const routes: Routes = [{
  path: '',
  component: TicketsComponent,

  // canActivate:[AuthGuard],
  // canActivateChild:[ChildAuthGuard],

  children: [
    {
    path: 'list',
    component: TicketsListComponent,
    },
    {
    path: 'add',
    component: AddTicketComponent,
    },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule { }

export const routedComponents = [

];
