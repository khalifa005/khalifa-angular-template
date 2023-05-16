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
  NbProgressBarModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

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
// import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { DndDirective } from './components/drag-filer-uploader/dnd.directive';
import { DragFilerUploaderComponent } from './components/drag-filer-uploader/drag-filer-uploader.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FileUploaderDotnetComponent } from './components/file-uploader-dotnet/file-uploader-dotnet.component';
import { MultiFileUploaderComponent } from './components/multi-file-uploader/multi-file-uploader.component';

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
  NbPopoverModule,
  NbProgressBarModule,

  ReactiveFormsModule,
  FormsModule,
  TranslateModule,
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

  FileUploaderComponent,
  FileUploaderDotnetComponent,
  MultiFileUploaderComponent,

  DragFilerUploaderComponent,
  DndDirective,
  PaginatorComponent,
  // ProgressComponent,
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
  imports: [
    CommonModule,
     ...NB_MODULES],
  exports: [
    CommonModule,
     ...PIPES,
      ...COMPONENTS],
  declarations: [
    ...COMPONENTS, ...PIPES],
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
