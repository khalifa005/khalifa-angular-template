import { ChangeDetectorRef, Component, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { AnalyticsService, SeoService } from '../@core/utils';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageTrackerService } from '../@core/utils/language-tracker.service';
import { Logger } from '../@core/utils/logger.service';
import { NbMenuComponent } from '@nebular/theme';

const log = new Logger('page');
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
    <!-- *ngIf="enableSide" -->
      <nb-menu  #menuItems  [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
//implements OnInit
export class PagesComponent implements OnInit {
//here is the main page that will still appear in all the app
  menu = [];

enableSide:boolean= true;

// @ViewChild('menuItems')menuItemsRef!:NbMenuComponent;

  constructor(
    public localizationService: TranslateService,
    private languageTrackerService: LanguageTrackerService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router)
    {
        this.sideMenuTranslationInt(false);
    }

    ngOnInit(): void {

      log.info(this.localizationService.currentLang);
      this.localizationService.onLangChange.subscribe((event: LangChangeEvent) => {
        // this.enableSide = false;
        this.sideMenuTranslationInt(true);

       });
  }

  sideMenuTranslationInt(lanChanged:boolean){
    const menuTranslated = MENU_ITEMS.map(u => ({ ...u, }));
    menuTranslated.forEach(item => {

      this.localizationService.get(item.title).subscribe((text:string) => {
        item.title = text
      });

    });
     log.info(MENU_ITEMS);
    this.menu = menuTranslated;
   }


}


