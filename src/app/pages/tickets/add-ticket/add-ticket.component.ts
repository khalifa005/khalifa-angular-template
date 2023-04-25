import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TicketDto, AddressForm } from '../forms/add-ticket.form';

@Component({
  selector: 'ngx-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})


export class AddTicketComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  form: AddressForm;

  ticketDto: TicketDto = {
    id:'1',
    addressLine: '123 Main St',
    city: 'Your City',
    state: 'OH',
    zip: 12345
};

  ngOnInit() {
    this.form = new AddressForm(this.ticketDto);
  }

}
