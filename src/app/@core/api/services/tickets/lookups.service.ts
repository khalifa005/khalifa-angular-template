import { AppDefaultValues } from '../../../utils/default-values';
import { LookupDto } from './../../../models/lookup.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class GetTicketLookupsService {

  categoryTypes: LookupDto[];

  getCategoryType(): LookupDto[] {

    this.categoryTypes = [
      {
        id: AppDefaultValues.DropDownAllOption,
        nameAr: AppDefaultValues.DropDownAllOptionAr,
        nameEn: AppDefaultValues.DropDownAllOptionEn,
      },
      { id: 1, nameAr: 'طلب', nameEn: 'order' },
      { id: 2, nameAr: 'شكوى', nameEn: 'complain' },
    ];
    return this.categoryTypes;
  }


  // getDemoType(): LookupDto[] {

  //   this.categoryTypes = [
  //     {
  //       id: AppDefaultValues.DropDownAllOption,
  //        nameAr: AppDefaultValues.DropDownAllOptionAr,
  //         nameEn: AppDefaultValues.DropDownAllOptionEn,
  //     },
  //     { id: '1', nameAr: '', nameEn: '' },
  //     { id: '2', nameAr: '', nameEn: '' },
  //   ];

  //   return this.categoryTypes;
  // }

}
