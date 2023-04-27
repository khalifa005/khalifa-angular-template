import { AppDefaultValues } from '../../../utils/default-values';
import { LookupDto } from './../../../models/lookup.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class GetTicketLookupsService {

  categoryTypes: LookupDto[];

  getCategoryTypes(): LookupDto[] {

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

  getInsuranceTypes(): LookupDto[] {

    this.categoryTypes = [
      {
        id: AppDefaultValues.DropDownAllOption,
        nameAr: AppDefaultValues.DropDownAllOptionAr,
        nameEn: AppDefaultValues.DropDownAllOptionEn,
      },
      { id: 1, nameAr: 'Motor TPL', nameEn: 'Motor TPL' },
      { id: 2, nameAr: 'Car ', nameEn: 'Car' },
    ];
    return this.categoryTypes;
  }

  getCaseTitleTypes(): LookupDto[] {

    this.categoryTypes = [
      {
        id: AppDefaultValues.DropDownAllOption,
        nameAr: AppDefaultValues.DropDownAllOptionAr,
        nameEn: AppDefaultValues.DropDownAllOptionEn,
      },
      { id: 1, nameAr: 'Claim delay', nameEn: 'Claim delay' },
      { id: 2, nameAr: 'Claim delay 2 ', nameEn: 'Claim delay 2' },
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
