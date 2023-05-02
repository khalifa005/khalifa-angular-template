
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl,Validators, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms'
import { RequestPasswordDTO, RequestPasswordForm } from '../forms/request-password.form';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nb-request-password-page',
  styleUrls: ['./request-password.component.scss','../auth.component.scss'],
  templateUrl: './request-password.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NbRequestPasswordComponent implements OnInit{

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};


  requestPasswordDTO : RequestPasswordDTO ={
    email :"",
  };

  directions = NbLayoutDirection;
  requestPasswordForm: RequestPasswordForm;

  constructor(private directionService: NbLayoutDirectionService,
    public translate: TranslateService,
    public fb: FormBuilder
    ) {
      if( this.translate.currentLang === "ar-SA"){
        this.directionService.setDirection(this.directions.RTL);
      }
  }

  get email() {
    return this.requestPasswordForm.get('email');
  }


  ngOnInit() {
    this.requestPasswordForm = new RequestPasswordForm(this.requestPasswordDTO);
  }

  requestPass(): void {
    if (this.requestPasswordForm.valid) {
      //Logic for valid form
    console.log(this.requestPasswordForm);
    } else {
      this.requestPasswordForm.markAllAsTouched()
     };
  }

  getConfigValue(key: string): any {
  }
}
