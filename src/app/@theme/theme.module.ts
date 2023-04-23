import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbLayoutDirection,
  DEFAULT_MEDIA_BREAKPOINTS,
  NbPopoverModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  TranslatorPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { LayoutDirectionSwitcherComponent } from './components/layout-direction-switcher/layout-direction-switcher.component';
import { MissingTranslationHandler, TranslateCompiler, TranslateLoader, TranslateModule, TranslateParser } from '@ngx-translate/core';
import { Observable } from 'rxjs';
// import { LangSwitcherListComponent } from './components/language-switcher/language-switcher-list/language-switcher-list.component';
// import { LangSwitcherComponent } from './components/language-switcher/language-switcher.component';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbPopoverModule
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  TranslatorPipe
];



@NgModule({
  imports: [CommonModule, ...NB_MODULES
    // ,NbThemeModule.forRoot(nbThemeOptions, nbJSThemes, nbMediaBreakpoints, 'rtl')
  ],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME ],
          DEFAULT_MEDIA_BREAKPOINTS,

        ).providers,
      ],
    };
  }
}
