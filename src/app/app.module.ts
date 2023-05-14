import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbLayoutComponent,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { HeadersInterceptor } from './@core/interceptors/headers.interceptor';

@NgModule({
  declarations: [	AppComponent,
      MyComponentComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
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
    //what we added start from here
    NbLayoutModule,
    TranslateModule.forRoot(),

    ThemeModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  bootstrap: [AppComponent],
  providers :[{
    provide : HTTP_INTERCEPTORS,
    useClass : HeadersInterceptor,
    multi : true

  }]
})
export class AppModule {
}
