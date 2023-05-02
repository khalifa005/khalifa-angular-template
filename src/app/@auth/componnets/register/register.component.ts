/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl,Validators, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms' 
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { RegisterationDTO, RegisterForm } from '../forms/register.form';

@Component({
  selector: 'nb-register',
  styleUrls: ['./register.component.scss','../auth.component.scss'],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NbRegisterComponent implements OnInit, OnDestroy {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  directions = NbLayoutDirection;

  registerationDTO : RegisterationDTO ={
    firstname :"",
    middlename :"",
    lastname :"",
    email :"",
    username :"",
    password :"",
    mobilenumber :"",
    idType :"1",
    nataionalid :"",
    passport :"",
  };
  
  registerForm: RegisterForm;

  constructor(private directionService: NbLayoutDirectionService,
    public translate: TranslateService,
    public fb: FormBuilder
    ) {
      if( this.translate.currentLang === "ar-SA"){
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

  onSubmit() {
    if (this.registerForm.valid) {
      //Logic for valid form 
    console.log(this.registerForm);
    } else {
      this.registerForm.markAllAsTouched()
     };
    }

    ngOnInit() {
      this.registerForm = new RegisterForm(this.registerationDTO);
    }

    ngOnDestroy() {
      
   }

   reset() {
    this.registerForm.reset();
  }

  changeIDTypeOption(selectedOption){
   const idTypeInput = document.getElementById('idType') as HTMLInputElement;
   const nataionalInput = document.getElementsByClassName('div-nataional')[0] as HTMLInputElement;
   const passportInput = document.getElementsByClassName('div-Passport')[0] as HTMLInputElement;

   if(selectedOption == "1"){
    idTypeInput.setAttribute("selected","1");
    idTypeInput.setAttribute("ng-reflect-selected","1");
    nataionalInput.setAttribute("style","display:block");
    passportInput.setAttribute("style","display:none");

   }else{
    idTypeInput.setAttribute("selected","2");
    idTypeInput.setAttribute("ng-reflect-selected","2");
    passportInput.setAttribute("style","display:block");
    nataionalInput.setAttribute("style","display:none");

   }
  }


}


export function checkIDTypeValidator() : ValidatorFn{
  return (form: FormGroup): ValidationErrors | null => {

    const idType = form.get("idType").value

    return null;
}
 }


