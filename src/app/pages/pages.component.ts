import { Component, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { Router } from '@angular/router';
import { AnalyticsService, SeoService } from '../@core/utils';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { LanguageTrackerService } from '../@core/utils/language-tracker.service';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>

      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
//implements OnInit
export class PagesComponent {
//here is the main page that will still appear in all the app
  menu = MENU_ITEMS;

  constructor(
    // public translate: TranslateService,
    private languageTrackerService: LanguageTrackerService,

    private injector: Injector,
    private router: Router)
    {}

    // @ViewChild("outlet", {read: ViewContainerRef}) outletRef: ViewContainerRef;
    // @ViewChild("content", {read: TemplateRef}) contentRef: TemplateRef<any>;

    // private rerender() {
    //   this.outletRef.clear();
    //   this.outletRef.createEmbeddedView(this.contentRef);
    // }

//   ngOnInit(): void { //the lan will change and this will execute
//     this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
//       console.log("LangChangeEvent")
//          // do something
//          this.rerender();
//         //  this.translate.use(event.lang);
//        });
// }
}


