/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, Validators, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms'
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { RegisterationDTO, RegisterForm } from '../forms/register.form';
import { Subscription } from 'rxjs';
import { Logger } from './../../../@core/utils/logger.service';
import { numericWithTenCharactersLimit } from '../../../@core/utils/static-data/input-validator.regx'
import { ToastNotificationService } from '../../../@core/utils/toast-notification.service';
import { NotitficationsDefaultValues } from "../../../@core/utils/static-data/default-values";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss', '../auth.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRegisterComponent implements OnInit, OnDestroy {

  private log = new Logger(NbRegisterComponent.name);

  private subs: Subscription[] = [];
  // redirectDelay: number = 0;
  // showMessages: any = {};
  // strategy: string = '';

  // submitted = false;
  // errors: string[] = [];
  // messages: string[] = [];
  // user: any = {};
  numberPatternTenCharactersLimit: RegExp = numericWithTenCharactersLimit;
  hidePassportIDSection: boolean = true;
  hideNationalIDSection: boolean = false;
  directions = NbLayoutDirection;

  registerationDTO: RegisterationDTO = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    mobilenumber: "",
    idType: "1",
    nataionalid: "",
    passport: "",
  };

  registerForm: RegisterForm;

  constructor(private directionService: NbLayoutDirectionService,
    public translate: TranslateService,
    public fb: FormBuilder,
    private router: Router,
    private toastNotificationService: ToastNotificationService,
    private auth: AuthService
  ) {
    if (this.translate.currentLang === "ar-SA") {
      this.directionService.setDirection(this.directions.RTL);
    }
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get middlename() {
    return this.registerForm.get('middlename');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get mobilenumber() {
    return this.registerForm.get('mobilenumber');
  }

  get idType() {
    return this.registerForm.get('idType');
  }

  get nataionalid() {
    return this.registerForm.get('nataionalid');
  }

  get passport() {
    return this.registerForm.get('passport');
  }

  ngOnInit() {
    this.registerForm = new RegisterForm(this.registerationDTO);
    this.onIDTypeChange();
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }

  reset() {
    this.registerForm.reset();
  }


  private onIDTypeChange(): void {
    const eventIdType = this.registerForm.get('idType').valueChanges.subscribe((idTypeValue: number) => {

      //try to extarct into function
      if (idTypeValue == 1) {
        this.hidePassportIDSection = true;
        this.hideNationalIDSection = false;
      }
      else {
        this.hidePassportIDSection = false;
        this.hideNationalIDSection = true;
      }
    });

    this.subs.push(eventIdType);
  }

  private mapFormToRegisterationDto(form: RegisterForm): RegisterationDTO {
    return {
      ...form.value,
      // orders: this.mapOrders(form.Orders)
    } as RegisterationDTO;
  }

  handleForm(form: RegisterForm): void {
    // this.customerService.saveCustomer(this.mapFormToCustomer(form));
    let registerationDTO = this.mapFormToRegisterationDto(form);
    this.log.info(registerationDTO);
    // JSON.stringify(registerationDTO);
  }


  onSubmit() {
    if (this.registerForm.valid) {
      //Logic for valid form 
      this.log.info(this.registerForm);
      let registerObj = this.mapFormToRegisterationDto(this.registerForm);
      this.auth.signUp(registerObj)
        .subscribe(
          {
            next: (res => {
              this.router.navigateByUrl("/auth/login").then(() => {
                let body = this.translate.instant('registeration.success-registeration');
                let title = this.translate.instant('Success');
                this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Success, 'checkmark-circle-2-outline', title, body);
              });
            }),
            error: (err => {
              let title = this.translate.instant('error'); 
              
              this.toastNotificationService.showError(title, err?.error.message);
            })
          });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}


