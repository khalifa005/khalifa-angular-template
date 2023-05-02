import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LanguageSelectorComponent } from './language-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { MaterialModule } from '@app/material.module';
// import { LanguageSelectorComponent } from './language-selector.component';
// /MaterialModule
@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // MatNativeDateModule,
    // MaterialExampleModule,
  ],
  declarations: [LanguageSelectorComponent],
  exports: [],
})
export class I18nModule {}
