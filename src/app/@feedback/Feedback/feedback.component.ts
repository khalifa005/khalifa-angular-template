import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Logger } from '../../@core/utils/logger.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

   log = new Logger(FeedbackComponent.name);

    // private subs: Subscription[] = [];
    // form: TicketForm;

  public form: FormGroup;
  squareRate = 3;
  cssRate = 2.6;
  faRate = 4;
  movieRate = 0;
  verticalRate = 5;
  fontAwesomeRate = 3.5;
  rate = 3;

    aboutUsOptions = [
      { value: 'WhatsApp', label: 'WhatsApp', icon:'phone-call' },
      { value: 'Twitter', label: 'Twitter', icon:'twitter' },
      { value: 'Facebook', label: 'Facebook', icon:'facebook' },
      { value: 'Linkedin', label: 'Linkedin', icon:'linkedin' },
      { value: 'Other', label: 'Other', icon:'hash' },
    ];
    selectedAboutUsOption;

    portalOptions = [
      { value: 'true', label: 'Yes', icon:'checkmark' },
      { value: 'false', label: 'No', icon:'close' },
    ];
    portalOption;

    policyOptions = [
      { value: 'true', label: 'Yes', icon:'checkmark' },
      { value: 'false', label: 'No', icon:'close' },
    ];
    policyOption;

  user!: { firstName: string; lastName: string; };

  starCount:number = 5;
  rachRatingScore:number = 0;
  attiudeRatingScore:number = 0;
  estoresRatingScore:number = 0;
  
  suggestion:string = '';


  constructor(private fb: FormBuilder,
    private router:Router,
    private translateService: TranslateService){
  }

  onReachRatingChanged(rating){
    this.rachRatingScore = rating;
  }
  
  onAttiudeRatingChanged(rating){
    this.attiudeRatingScore = rating;
  }
  
  onEstoreRatingChanged(rating){
    this.estoresRatingScore = rating;
  }

  ngOnInit(): void {
    this.log.info(this.translateService.translations);
    this.user = { firstName: 'mahmoud', lastName: 'khalifa' };
  }

  // save(){
  //   //save to db if form is valid
  //     if (this.form.valid) {
  //       this.log.info("reactive form submitted");
  //       this.log.info(this.form);
  //       this.handleForm(this.form);

  //     }
  //   }

  // reset() {
  //   this.form.reset();
  // }

  // ngOnDestroy() {
  //   this.subs.forEach((s) => s.unsubscribe());
  // }

  // handleForm(form: TicketForm): void {
  //   // this.customerService.saveCustomer(this.mapFormToCustomer(form));
  //   let ticketDto =  this.mapFormToTicketDto(form);

  //   let test = convertToFormData(ticketDto)

  //   this.log.info(ticketDto);
  //   this.toastNotificationService.showToast(NotitficationsDefaultValues.Success, 'Ticket', 'new ticket has been saved');
  //   this.router.navigateByUrl("/pages/ticket/list");
  //   // JSON.stringify(ticketDto);
  // }

  // private mapFormToTicketDto(form: TicketForm): TicketDto {
  //   return {
  //     ...form.value,
  //     // orders: this.mapOrders(form.Orders)
  //   } as TicketDto;
  // }


}
