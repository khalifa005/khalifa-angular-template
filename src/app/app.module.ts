/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import {
//   ModuleTranslateLoader,
//   IModuleTranslationOptions
// } from '@larscom/ngx-translate-module-loader';



// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/','.json');
//   // return new TranslateHttpLoader(http, '../assets/i18n/','.json');
// }

// export function ModuleHttpLoaderFactory(http: HttpClient) {
//   const baseTranslateUrl = './assets/i18n';
//   const options: IModuleTranslationOptions = {
//     modules: [
//       // Fetches file at e.g. /assets/i18n/en.json
//       { baseTranslateUrl },
//       // Fetches file at e.g. /assets/i18n/non-lazy/en.json
//        { baseTranslateUrl, moduleName: 'non-lazy', namespace: 'FEATURE_FOO' }
//     ]
//   };
//   return new ModuleTranslateLoader(http, options);
// }



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule,
    BrowserAnimationsModule,
    SharedModule,

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    TranslateModule.forRoot(),
    SharedModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,

    //       deps: [HttpClient]
    //   },
    //   // extend:true,
    //   // isolate: false, // <-- PLAY WITH IT
    //   // extend: true // <-- PLAY WITH IT
    // }),

    HttpClientModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: ModuleHttpLoaderFactory,
    //     deps: [HttpClient]
    //   },
    //   // isolate: false, // <-- PLAY WITH IT
    //   // extend: false
    // })
    AppRoutingModule,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
