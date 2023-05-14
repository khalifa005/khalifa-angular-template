import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, AbstractControl, Validators, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms'
import { LoginDTO, LoginForm } from '../forms/login.form';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { Logger } from '../../../@core/utils/logger.service';
import { NavigationEnd, Router } from "@angular/router";
import { ToastNotificationService } from '../../../@core/utils/toast-notification.service';
import { NotitficationsDefaultValues } from "../../../@core/utils/static-data/default-values";
import { AuthService } from "../../services/auth.service";
import { first } from "rxjs/operators";

const log = new Logger('App');
@Component({
  selector: 'nb-login',
  styleUrls: ['./login.component.scss', '../auth.component.scss'],
  templateUrl: './login.component.html',
})
export class NbLoginComponent implements OnInit {


  loginDTO: LoginDTO = {
    username: "",
    password: "",
  };

  directions = NbLayoutDirection;
  loginForm: LoginForm;

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


  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.loginForm = new LoginForm(this.loginDTO);
    // log.info("Login Is working");
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //Logic for valid form 
      console.log(this.loginForm);

      //--Send Object

      // let loggedUserName = this.loginForm.username.value;
      let loginDTo = this.mapFormToLoginDto(this.loginForm);
      this.auth.login(loginDTo)
        .subscribe({
          next: (res => {
            this.auth.storeToken(res.token);
            this.loginForm.reset();
            this.router.navigateByUrl("/").then(nav => {
              let body = this.translate.instant('welcomeMessage', { firstName: res.message });
              let title = this.translate.instant('success');
              this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Success, 'email-outline', title, body);
            });
            // this.router.navigateByUrl("/");
            // this.router.events.pipe(
            //   first(evt => evt instanceof NavigationEnd)
            // ).subscribe(() => {
            //   let body = this.translate.instant('welcomeMessage',{firstName: res.message});
            //   let title = this.translate.instant('success');
            //   this.toastNotificationService.showNotificationWithCustomIcon(NotitficationsDefaultValues.Success,'email-outline',title,body);
            // });



            // alert(res.message);
          }),
          error: (err => {
            let title = this.translate.instant('error');
            this.toastNotificationService.showError(title, err?.error.message);
          })
        })

    } else {
      this.loginForm.markAllAsTouched()
      let validationErrors = this.loginForm.errors;
      let errorMessage = this.translate.instant('login.invalid-user-info');
      let title = this.translate.instant('error');
      this.toastNotificationService.showError(title, errorMessage);
    };
  }

  private mapFormToLoginDto(form: LoginForm): LoginDTO {
    return {
      ...form.value,
      // orders: this.mapOrders(form.Orders)
    } as LoginDTO;
  }

}
