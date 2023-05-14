import { convertToFormData } from '../../../@core/utils/helpers-function';
import { AppDefaultValues, NotitficationsDefaultValues } from './../../../@core/utils/static-data/default-values';
import { LookupDto } from './../../../@core/models/lookup.model';
import { GetTicketLookupsService } from './../../../@core/api/services/tickets/lookups.service';
import { Logger } from './../../../@core/utils/logger.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TicketForm } from './add-ticket.form';
// import { Subscription } from 'rxjs-compat';
import { TicketDto } from '../models/ticket.dto';
import { Subscription } from 'rxjs';
import { ToastNotificationService } from '../../../@core/utils/toast-notification.service';
import { Router } from '@angular/router';
import { TicketCategoriesApiService } from '../../../@core/api/services/lookups/branches.api.service';

@Component({
  selector: 'ngx-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})


export class AddTicketComponent implements OnInit, OnDestroy {

  private log = new Logger(AddTicketComponent.name);

  private subs: Subscription[] = [];

  hideCarInsuranceSection: boolean = true;
  hideCancellationRequestDate: boolean = true;
  form: TicketForm;
  categoryTypes: LookupDto[];
  insuranceTypes: LookupDto[];
  caseTitleTypes: LookupDto[];
  cities: LookupDto[];

  dropDownAllOption = new LookupDto(AppDefaultValues.DropDownAllOption,
     AppDefaultValues.DropDownAllOptionAr,
      AppDefaultValues.DropDownAllOptionEn);

  constructor(
    private router:Router,
    private ticketCategoriesApiService:TicketCategoriesApiService,
    private toastNotificationService:ToastNotificationService,
    public fb: FormBuilder,
    private ticketLookupsService: GetTicketLookupsService) {
    //load loockups
    this.categoryTypes = this.ticketLookupsService.getCategoryTypes();
    this.insuranceTypes = this.ticketLookupsService.getInsuranceTypes();
    //this depend on insurance type
    // this.caseTitleTypes = this.ticketLookupsService.getCaseTitleTypes();

    this.cities = this.ticketLookupsService.getCities();
    // this.log.info(this.categoryTypes);
    }

  ticketDto: TicketDto = {
    id:'1',
    categoryId:-1,
    insuranceTypeId: -1,
    caseTitleTypeId:-1,
    cancellationRequestDate:'',
    policyNumber:'',
    claimNumber:'',
    plateNumber:'',
    plateLetters:'',
    najmCaseId:'',
    cityId:-1,
    title:'',
    description:'',
    file:''
};

// imagePreview: string;
// onSelect(event: Event) {
//   const file = (event.target as HTMLInputElement).files[0];
//   this.form.patchValue({image: file});
//   this.form.get('image').updateValueAndValidity();
//   const reader = new FileReader();
//   reader.onload = () => {
//     this.imagePreview = reader.result.toString();
//   };
//   reader.readAsDataURL(file);
// }


ngOnInit() {

  let apiServiceSub = this.ticketCategoriesApiService.getListItem()
  .subscribe((res) => {
this.log.info("ticketCategoriesApiService");
this.log.info(res);
  },
  (erorr) => {

  });

  //GET from api service and ini the form
    this.form = new TicketForm(this.ticketDto);
    this.onInsuranceTypeIdChange();
}

private onInsuranceTypeIdChange(): void {
  //track changes
  const sub1 = this.form.get('insuranceTypeId')
  .valueChanges.subscribe((insuranceTypeIdValue: number) => {
    //this depend on insurance type - change list item based on insuranceTypeIdValue
    this.caseTitleTypes = this.ticketLookupsService.getCaseTitleTypes().filter(x=> x.parentId == insuranceTypeIdValue);
    //if the use selected specific item do
    //try to extarct into function
    if(insuranceTypeIdValue === 2){
      this.hideCarInsuranceSection = false;
      this.hideCancellationRequestDate = false;
    }
    else{
      this.hideCarInsuranceSection = true;
      this.hideCancellationRequestDate = true;
    }
    // this.log.info(this.form);

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

  let test = convertToFormData(ticketDto)

  this.log.info(ticketDto);
  this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, 'Ticket', 'new ticket has been saved');
  this.router.navigateByUrl("/pages/ticket/list");
  // JSON.stringify(ticketDto);
}

private mapFormToTicketDto(form: TicketForm): TicketDto {
  return {
    ...form.value,
    // orders: this.mapOrders(form.Orders)
  } as TicketDto;
}

updateFormDescriptionField() {
  // let tets = this.form.get('addressLine');
//no nned because we update from form.ts file by the constuctor
//use for the fields dependencies
  this.form.patchValue({description: 'new title val'});
}

fullFormUpdate() {
//no nned because we update from form.ts file by the constuctor

  // this.form.setValue({addressLine: 'new full address', city: 'tanta', state:'state', zip:'12345'});
}

get description() {
  //get the description
  return this.form.controls['description'];
}

//check errors
//formGroup.get('myEmailField').errors
reset() {
  this.form.reset();
}

ngOnDestroy() {
  this.subs.forEach((s) => s.unsubscribe());
}

}
