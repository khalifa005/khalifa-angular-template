import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl,Validators, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms' 
import { LoginDTO, LoginForm } from '../forms/login.form';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Logger } from '../../../@core/utils/logger.service';

const log = new Logger('App');
@Component({
  selector: 'nb-login',
  styleUrls: ['./login.component.scss','../auth.component.scss'],
  templateUrl: './login.component.html',
})
export class NbLoginComponent implements OnInit {


  loginDTO : LoginDTO ={
    username :"",
    password :"",
  };

  directions = NbLayoutDirection;
  loginForm: LoginForm;

  constructor(private directionService: NbLayoutDirectionService,
    public translate: TranslateService,
    public fb: FormBuilder
    ) {
      if( this.translate.currentLang === "ar-SA"){
        this.directionService.setDirection(this.directions.RTL);
      }
  }


  get username() {
    return this.loginForm.get('username');
  } 

  get password() {
    return this.loginForm.get('password');
  } 

  ngOnInit() {
    this.loginForm = new LoginForm(this.loginDTO);
    log.info("Login Is working")
  }

  onSubmit(){
    if (this.loginForm.valid) {
      //Logic for valid form 
    console.log(this.loginForm);
    } else {
      this.loginForm.markAllAsTouched()
     };
  }

}
