import { Logger } from './../../../@core/utils/logger.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TicketDto, TicketForm } from '../forms/add-ticket.form';
import { Subscription } from 'rxjs-compat';

@Component({
  selector: 'ngx-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})


export class AddTicketComponent implements OnInit, OnDestroy {
  private log = new Logger(AddTicketComponent.name);

  private subs: Subscription[] = [];

  constructor(public fb: FormBuilder) {

   }

  ticketDto: TicketDto = {
    // id:'1',
    addressLine: '123 Main St',
    city: 'Your City',
    state: 'OH',
    zip: '433'
};


form: TicketForm;

ngOnInit() {
    this.form = new TicketForm(this.ticketDto);

    const sub1 = this.form.get('addressLine')
    .valueChanges.subscribe((adressValue: string) => {
      this.log.info(adressValue);
    });

    this.subs.push(sub1);

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

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
    }


}
