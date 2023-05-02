import { Component, OnDestroy, Input } from '@angular/core';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LanguageTrackerService } from '../../../@core/utils/language-tracker.service';
import { I18nService } from '../../../@core/utils/i18n/i18n.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-layout-direction-switcher',
  template: `
    <ngx-switcher translate
      [firstValue]="directions.LTR"
      [secondValue]="directions.RTL"
      [firstValueLabel]="'en' | translate"
      [secondValueLabel]="'ar' | translate"
      [value]="currentDirection"
      (valueChange)="toggleDirection($event)"
      [vertical]="vertical">
    </ngx-switcher>
  `,
})
export class LayoutDirectionSwitcherComponent implements OnDestroy {

  protected destroy$ = new Subject<void>();
  // protected lang$ = new Subject<string>();

  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;

  @Input() vertical: boolean = false;

  constructor(private directionService: NbLayoutDirectionService,
    // private languageTrackerService: LanguageTrackerService,
    private i18nService: I18nService,
    private router: Router,
    public translate: TranslateService
    ) {


    this.directionService.onDirectionChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe(newDirection => this.currentDirection = newDirection);


      if( this.translate.currentLang === "ar-SA"){
        this.directionService.setDirection(this.directions.RTL);
      }
    }

  toggleDirection(newDirection) {
    this.directionService.setDirection(newDirection);
//keep this as it will change the lang
    if(newDirection == "rtl"){
      this.i18nService.language = 'ar-SA';
      //([`/${url}`])

      // this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      //   this.router.navigate([`/`]).then(()=>{
      //   console.log(`After navigation I am on:${this.router.url}`)
      //   })
      //   })
    }else{
      this.i18nService.language = 'en-US';
    //  this.languageTrackerService.SendMessage("en");
    // this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
    //   this.router.navigate([`/`]).then(()=>{
    //   console.log(`After navigation I am on:${this.router.url}`)
    //   })
    //   })
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
