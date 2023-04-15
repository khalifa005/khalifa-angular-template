import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';

import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Observable } from 'rxjs';
import { I18nModule } from '../i18n';
import { SharedModule } from '../shared/shared.module';


// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/lazy/', '.json');
// }

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
// }

export function createTranslateLoader(http: HttpClient) {
  console.log('FeatureModule createTranslateLoader');
  return new TranslateHttpLoader(
    http, './assets/i18n/feature/', '.json');
}

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    // SharedModule,
    TranslateModule,
    // I18nModule,
    // TranslateModule.forChild({
    //   loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] },
    //   extend:true,
    //   isolate: false
    // })
  //   TranslateModule.forChild({
  //     loader: {provide: TranslateLoader, useClass: CustomLoader},
  //     // compiler: {provide: TranslateCompiler, useClass: CustomCompiler},
  //     // parser: {provide: TranslateParser, useClass: CustomParser},
  //     // missingTranslationHandler: {provide: MissingTranslationHandler, useClass: CustomHandler},
  //     isolate: true
  // })
  // TranslateModule.forChild({
  //   loader: {
  //     provide: TranslateLoader,
  //     useFactory: createTranslateLoader,
  //     deps: [HttpClient]
  //   },
  //   isolate: false, // <-- PLAY WITH IT
  //   extend: true // <-- PLAY WITH IT
  // })
   // Translations.
  //  TranslateModule.forChild({
  //   loader: {
  //     provide: TranslateLoader,
  //     useFactory: createTranslateLoader,
  //     deps: [HttpClient]
  //   },
  //   isolate: true, // <-- PLAY WITH IT
  //   extend: true // <-- PLAY WITH IT
  // })
  // TranslateModule.forChild({
  //   loader: {
  //     provide: TranslateLoader,
  //     useFactory: (createTranslateLoader),
  //     deps: [HttpClient]
  //   },
  //   isolate: true
  // })
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {

  constructor() {

  	// this.translationService.store.onLangChange
    //   .subscribe((lang: LangChangeEvent) => {
    //     console.log(' ==> FeatureModule ', lang);
    //     this.translationService.use(lang.lang);
    //   });

    // const currentLang = this.translateService.currentLang;
    // this.translateService.currentLang = '';
    // this.translateService.store.onLangChange.subscribe(
    //   (lang: LangChangeEvent) => {
    //     console.log(' ==> LazyLoadedModule ', lang);
    //      this.translateService.use(lang.lang);
    //     //move
    //   }
    // );
    // const currentLang = translateService.currentLang;
    // translateService.currentLang = '';
    //  translateService.use(currentLang);

    //  this.translateService.use('ar');

// //     //the lan will change and this will execute
// this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
// console.log("LangChangeEvent")
//    // do something
//    this.translateService.use(event.lang);
//    let tets = this.translateService.currentLang;
//  });

}
}
