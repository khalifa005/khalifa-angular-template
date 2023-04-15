import { Component, OnDestroy, Input } from '@angular/core';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LanguageTrackerService } from '../../../@core/utils/language-tracker.service';
import { I18nService } from '../../../i18n/i18n.service';

@Component({
  selector: 'ngx-layout-direction-switcher',
  template: `
    <ngx-switcher
      [firstValue]="directions.RTL"
      [secondValue]="directions.LTR"
      [firstValueLabel]="'RTL'"
      [secondValueLabel]="'LTR'"
      [value]="currentDirection"
      (valueChange)="toggleDirection($event)"
      [vertical]="vertical">
    </ngx-switcher>
  `,
})
export class LayoutDirectionSwitcherComponent implements OnDestroy {

  protected destroy$ = new Subject<void>();
  protected lang$ = new Subject<string>();

  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;

  @Input() vertical: boolean = false;

  constructor(private directionService: NbLayoutDirectionService,
    private languageTrackerService: LanguageTrackerService,
    private i18nService: I18nService
    // public translate: TranslateService
    ) {
    this.currentDirection = this.directionService.getDirection();

    this.directionService.onDirectionChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(newDirection => this.currentDirection = newDirection);
  }

  toggleDirection(newDirection) {
    this.directionService.setDirection(newDirection);
//keep this as it will change the lang
    if(newDirection == "rtl"){
      this.i18nService.language = 'ar-SA';

      // this.translate.currentLang = '';
      // this.translate.use("ar");
      // this.languageTrackerService.SendMessage("ar");
      // this.lang$.em
    }else{
      this.i18nService.language = 'en-US';
      // this.translate.currentLang = '';
    //  this.translate.use("en");
    //  this.languageTrackerService.SendMessage("en");

    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
