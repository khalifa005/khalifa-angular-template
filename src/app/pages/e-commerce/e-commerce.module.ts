import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
import { SlideOutComponent } from './slide-out/slide-out.component';

import { CountryOrdersComponent } from './country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from './country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CountryOrdersChartComponent } from './country-orders/chart/country-orders-chart.component';
import { EarningCardComponent } from './earning-card/earning-card.component';
import { EarningCardBackComponent } from './earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from './earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from './earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from './earning-card/front-side/earning-live-update-chart.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
// }

// // AoT requires an exported function for factories.
// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
// }

// export function createTranslateLoader(http: HttpClient) {
//   console.log('FeatureModule createTranslateLoader');
//   return new TranslateHttpLoader(
//     http, './assets/i18n/', '.json');
// }

// // AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, '../../../assets/i18n/','.json');
//   // return new TranslateHttpLoader(http, '../assets/i18n/','.json');
// }
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, '../../../assets/i18n/', '.json');
// }

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/lazy/', '.json');
// }

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    TranslateModule
    // TranslateModule.forChild({ extend: true })
    // TranslateModule.forChild({
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
  //     useFactory: createTranslateLoader,
  //     deps: [HttpClient]
  //   },
  //   isolate: false, // <-- PLAY WITH IT
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
    ECommerceComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,

  ],
  providers: [
    CountryOrdersMapService,
  ],
})
export class ECommerceModule {
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
    //     this.translateService.use(lang.lang);
    //   }
    // );

    // const currentLang = this.translateService.currentLang;
    // this.translateService.currentLang = '';
    // this.translateService.store.onLangChange.subscribe(
    //   (lang: LangChangeEvent) => {
    //     console.log(' ==> LazyLoadedModule ', lang);
    //     // this.translateService.use(lang.lang);
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
