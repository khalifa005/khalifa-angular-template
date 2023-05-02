import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbLayoutDirection, NbLayoutDirectionService, NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { I18nService } from '../../../@core/utils/i18n/i18n.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  @Input() isAuthenticated : true;
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  supportedLanguages!: string[];
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;
  currentTheme = 'default';
  defaultLang;

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private i18nService: I18nService,
              private directionService: NbLayoutDirectionService,
              private breakpointService: NbMediaBreakpointsService) {

    this.directionService.onDirectionChange()
    .pipe(takeUntil(this.destroy$))
    .subscribe(newDirection => this.currentDirection = newDirection);


    if( this.i18nService.language === "ar-SA"){
      this.directionService.setDirection(this.directions.RTL);
    }
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.defaultLang = this.i18nService.language;
    this.supportedLanguages = this.i18nService.supportedLanguages;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.khalifa);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
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

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
