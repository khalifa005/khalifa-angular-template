import { Logger } from '../../@core/utils/logger.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

const log = new Logger('home');

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent  implements OnInit {

  constructor(private router:Router,
    private translateService: TranslateService) {};

    user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;

  ngOnInit(): void {
    // this.translate.use(this.translate.store.currentLang);

    console.log("Main ecomerce component");
    // this.router.navigateByUrl("/auth/login");

    this.user = { firstName: 'mahmoud', lastName: 'khalifa' };
    // // synchronous. Also interpolate the 'firstName' parameter with a value.
    //  this.welcome = this.translate.instant('welcomeMessage', { firstName: "kholfaa" });
    log.info(this.translateService.translations);
    // asynchronous - gets translations then completes.
    // this.translate.get(['login.username', 'login.password'])
    //   .subscribe(translations => {
    //     this.usernameLabel = translations['login.username'];
    //     this.passwordLabel = translations['login.password'];
    //     // this.welcome = translations['welcomeMessage' , { firstName: "kh"}];
    //   });

    //   this.translate.use('ar');

    //       //the lan will change and this will execute
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   console.log("LangChangeEvent")
    //      // do something
    //      this.translate.use("en");
    //    });
  }

}
