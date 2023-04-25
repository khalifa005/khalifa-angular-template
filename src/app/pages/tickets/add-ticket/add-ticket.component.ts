import { Logger } from './../../../@core/utils/logger.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TicketDto, TicketForm } from '../forms/add-ticket.form';

@Component({
  selector: 'ngx-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})


export class AddTicketComponent implements OnInit {
  private log = new Logger(AddTicketComponent.name);

  constructor(public fb: FormBuilder) {

   }

  ticketForm: TicketForm;

  ticketDto: TicketDto = {
    // id:'1',
    addressLine: '123 Main St',
    city: 'Your City',
    state: 'OH',
    zip: 12345
};

form = new FormGroup({
  addressLine: new FormControl(null, Validators.required),
  city: new FormControl(),
  state: new FormControl('Ohio'),
  zip: new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)])
});

  ngOnInit() {

    // this.ticketForm = new TicketForm(this.ticketDto);

    //test
    // this.ticketForm.get('addressLine')
    // .valueChanges.subscribe((adressValue: string) => {
    //   this.log.info(adressValue);
    // });
    this.form.get('addressLine')
    .valueChanges.subscribe((adressValue: string) => {
      this.log.info(adressValue);
    });
  }

}
