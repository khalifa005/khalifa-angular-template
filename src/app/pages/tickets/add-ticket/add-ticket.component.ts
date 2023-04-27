import { LookupDto } from './../../../@core/models/lookup.model';
import { GetTicketLookupsService } from './../../../@core/api/services/tickets/lookups.service';
import { Logger } from './../../../@core/utils/logger.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TicketForm } from './add-ticket.form';
import { Subscription } from 'rxjs-compat';
import { TicketDto } from '../models/ticket.dto';

@Component({
  selector: 'ngx-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})


export class AddTicketComponent implements OnInit, OnDestroy {

  private log = new Logger(AddTicketComponent.name);

  private subs: Subscription[] = [];

  constructor(
    public fb: FormBuilder,
    private ticketLookupsService: GetTicketLookupsService) {
    //load loockups
    this.categoryTypes = this.ticketLookupsService.getCategoryType();
    this.log.info(this.categoryTypes);
    }

  ticketDto: TicketDto = {
    id:'1',
    categoryId:'2',
    insuranceTypeId:'1',
    caseTitleTypeId:'1',
    policyNumber:'1',
    claimNumber:'1',
    plateNumber:'123',
    plateLetters:'abc',
    najmCaseId:'1',
    cityId:'1',
    title:'test',
    description:'details',
};

form: TicketForm;
categoryTypes: LookupDto[];

ngOnInit() {
  //GET from api service and ini the form
    this.form = new TicketForm(this.ticketDto);

    //track changes
    const sub1 = this.form.get('title')
    .valueChanges.subscribe((titleValue: string) => {

      this.log.info(titleValue);
      this.log.info(this.form);
    });
    this.subs.push(sub1);


}

save(){
//save to db if form is valid
  if (this.form.valid) {
    this.log.info("reactive form submitted");
    this.log.info(this.form);
    this.handleForm(this.form);
  }
}

handleForm(form: TicketForm): void {
  // this.customerService.saveCustomer(this.mapFormToCustomer(form));
  let ticketDto =  this.mapFormToTicketDto(form);

  this.log.info(ticketDto);
}

private mapFormToTicketDto(form: TicketForm): TicketDto {
  return {
    ...form.value,
    // orders: this.mapOrders(form.Orders)
  } as TicketDto;
}

updateFormAddressField() {
  // let tets = this.form.get('addressLine');
//no nned because we update from form.ts file by the constuctor
//use for the fields dependencies
  this.form.patchValue({title: 'new title val'});
}

fullFormUpdate() {
//no nned because we update from form.ts file by the constuctor

  // this.form.setValue({addressLine: 'new full address', city: 'tanta', state:'state', zip:'12345'});
}

reset() {
  this.form.reset();
}

ngOnDestroy() {
  this.subs.forEach((s) => s.unsubscribe());
}

}
