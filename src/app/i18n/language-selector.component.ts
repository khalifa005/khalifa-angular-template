// import { Component, OnInit, Input } from '@angular/core';

// import { I18nService } from './i18n.service';
// import { cwd } from 'process';

// @Component({
//   selector: 'ngx-app-language-selector',
//   templateUrl: './language-selector.component.html',
//   styleUrls: ['./language-selector.component.scss'],
// })
// export class LanguageSelectorComponent implements OnInit {
//   @Input() icon = false;

//   constructor(private i18nService: I18nService) {}

//   ngOnInit() {}

//   setLanguage(language: string) {
//     this.i18nService.language = language;
//     console.log(language);//en-US
//   }

//   get currentLanguage(): string {
//     return this.i18nService.language;
//   }

//   get languages(): string[] {
//     return this.i18nService.supportedLanguages;
//   }
// }
