import { LanguageEnum } from './../../@core/enums/language.enum';
import { I18nService } from '../../i18n/i18n.service';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

//how to use it
//{{x.nameEn | translator : x.nameAr}}

@Pipe({ name: 'translator' })
export class TranslatorPipe implements PipeTransform{

    constructor(private i18nService: I18nService) {}


    transform(englishLanguage:string, arabicLanguage:string):string {
        if( this.i18nService.language == LanguageEnum.En){
            return englishLanguage;
        }
        else{
            return arabicLanguage;
        }
    }


}

