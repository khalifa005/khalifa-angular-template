import { ChangeDetectorRef, Component, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { Router } from '@angular/router';
import { AnalyticsService, SeoService } from '../@core/utils';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Logger } from '../@core/utils/logger.service';
import { NbLayoutDirection, NbLayoutDirectionService, NbMenuComponent } from '@nebular/theme';


const log = new Logger('App');
@Component({
  selector: 'ngx-auth',
  styleUrls: ['./componnets/auth.component.scss'],
  templateUrl: './auth.component.html',
})
//implements OnInit
export class AuthComponent implements OnInit {

  isAuthenticated = false;
  directions = NbLayoutDirection;
  constructor(private directionService: NbLayoutDirectionService,
    public translate: TranslateService,
    ) {
      if( this.translate.currentLang === "ar-SA"){
        this.directionService.setDirection(this.directions.RTL);
      }
  }

    ngOnInit(): void {
     log.info("Inside Auth Compontent");
  }




}


