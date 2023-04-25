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

  ticketDto: TicketDto = {
    // id:'1',
    addressLine: '123 Main St',
    city: 'Your City',
    state: 'OH',
    zip: '433'
};

// form = this.fb.group({
//   addressLine: ['', Validators.required],
//   city: [],
//   state: ['Ohio'],
//   zip: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]
// });

form: TicketForm;
  ngOnInit() {
    this.form = new TicketForm(this.ticketDto);

    this.form.get('addressLine')
    .valueChanges.subscribe((adressValue: string) => {
      this.log.info(adressValue);
    });
  }

updateFormAddress() {
  // let tets = this.form.get('addressLine');

  this.form.patchValue({addressLine: 'new addressLine'});
}

fullFormUpdate() {
  this.form.setValue({addressLine: 'new full address', city: 'tanta', state:'state', zip:'12345'});
}

reset() {
  this.form.reset();
}
save(){
    this.log.info("reactive form submitted");
    this.log.info(this.form);
  }

}
