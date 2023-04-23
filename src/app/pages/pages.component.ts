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
        this.sideMenuTranslationInt();
    }

    ngOnInit(): void {

      this.localizationService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.sideMenuTranslationInt();

       });
  }

  sideMenuTranslationInt(){
    const menuTranslated = MENU_ITEMS.map(u => ({ ...u, }));

    menuTranslated.forEach(item => {

      this.localizationService.get(item.title).subscribe((text:string) => {
        item.title = text
      });


      if(item.children){
       const subMenuTranslated = item.children.map(u => ({ ...u, }));

       subMenuTranslated.forEach(subItem => {
          this.localizationService.get(subItem.title).subscribe((text:string) => {
            subItem.title = text
          });
        });

        item.children = subMenuTranslated;
      }

    });
     log.info(MENU_ITEMS);
    this.menu = menuTranslated;
   }


}


