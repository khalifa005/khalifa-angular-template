import { environment } from './../environments/environment';
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LangChangeEvent, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs-compat';
import { LanguageTrackerService } from './@core/utils/language-tracker.service';
import { cwd } from 'process';
import { I18nService } from './i18n';
import { Logger } from './@core/utils/logger.service';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

const log = new Logger('App');

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {

  subForSubject: Subscription;

  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,

    private router:Router,
    private translateService: TranslateService,
    private i18nService: I18nService
    // public translate: TranslateService,
    // private languageTrackerService: LanguageTrackerService
    )
    {
      // const browserLang = translate.getBrowserLang();
    //  translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
    }

  ngOnInit(): void {
    //START POINT OF THE APPLICATION FIRST com will render
    this.analytics.trackPageViews();
    // this.seoService.trackCanonicalChanges();

    if (environment.production) {
      Logger.enableProductionMode();
    }

      if (environment.production) {
         log.error(environment.serverUrl);
    }else{
      log.debug(environment.serverUrl);

    }

  // this.router.navigateByUrl("/auth/login");
  //  this.router.navigateByUrl("/com");

     // Setup translations
     this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

     const onNavigationEnd = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));

     // Change page title on navigation or language change, based on route data
    //  merge(this.translateService.onLangChange, onNavigationEnd)
    //    .pipe(
    //      map(() => {
    //        let route = this.activatedRoute;
    //        while (route.firstChild) {
    //          route = route.firstChild;
    //        }
    //        return route;
    //      }),
    //      filter((route) => route.outlet === 'primary'),
    //      switchMap((route) => route.data),
    //      untilDestroyed(this)
    //    )
    //    .subscribe((event) => {
    //      const title = event['title'];
    //      if (title) {
    //        this.titleService.setTitle(this.translateService.instant(title));
    //      }
    //    });

    // //the lan will change and this will execute
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   console.log("LangChangeEvent")
    //      // do something
    //      this.translate.use("en");
    //    });


    // this.subForSubject = this.languageTrackerService
    //   .GetMessage()
    //   .subscribe((result) => {
    //     console.log("languageTrackerService LangChangeEvent");
    //     this.translate.use(result);
    //   });

  }

  ngOnDestroy() {
    this.i18nService.destroy();
// if (this.subForSubject) this.subForSubject.unsubscribe();
  }



}
