import { AppDefaultValues } from '../../../utils/static-data/default-values';
import { LookupDto } from './../../../models/lookup.model';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class GetTicketLookupsService {

  categoryTypes: LookupDto[];
  caseTitleTypes: LookupDto[];
  insuranceTypes: LookupDto[];
  cities: LookupDto[];

  getCategoryTypes(): LookupDto[] {

    this.categoryTypes = [
      {
        id: AppDefaultValues.DropDownAllOption,
        nameAr: AppDefaultValues.DropDownAllOptionAr,
        nameEn: AppDefaultValues.DropDownAllOptionEn,
      },
      { id: 1, nameAr: 'طلب', nameEn: 'Urgent request' },
      { id: 2, nameAr: 'شكوى', nameEn: 'complain' },
    ];
    return this.categoryTypes;
  }

  getInsuranceTypes(): LookupDto[] {

    this.insuranceTypes = [
      {
        id: AppDefaultValues.DropDownAllOption,
        nameAr: AppDefaultValues.DropDownAllOptionAr,
        nameEn: AppDefaultValues.DropDownAllOptionEn,
      },
      { id: 1, nameAr: 'Motor TPL', nameEn: 'Motor TPL' },//
      { id: 2, nameAr: 'Motor Comprehensive', nameEn: 'Motor Comprehensive' },//
      { id: 3, nameAr: 'Medical', nameEn: 'Medical' },//
      { id: 4, nameAr: 'General Insurance', nameEn: 'General Insurance' },//
      { id: 5, nameAr: 'Travel', nameEn: 'Travel' }, //empty list of case titles
      { id: 6, nameAr: 'MLP', nameEn: 'MLP' },//empty list of case titles
      { id: 7, nameAr: 'visitor insurance', nameEn: 'visitor insurance' }, //empty list of case titles
      { id: 8, nameAr: 'Other', nameEn: 'Other' },//
    ];
    return this.insuranceTypes;
  }

  getCaseTitleTypes(): LookupDto[] {
   //depend on getInsuranceTypes
    this.caseTitleTypes = [
      // {
      //   id: AppDefaultValues.DropDownAllOption,
      //   nameAr: AppDefaultValues.DropDownAllOptionAr,
      //   nameEn: AppDefaultValues.DropDownAllOptionEn,
      // },
      { id: 1, nameAr: 'Claim delay', nameEn: 'Claim delay', parentId: 2 },
      { id: 2, nameAr: 'Objection to the claim amount', nameEn: 'Objection to the claim amount', parentId: 1 },
      { id: 2, nameAr: 'Delay in ergistering a claim', nameEn: 'Delay in ergistering a claim', parentId: 2 },
      { id: 2, nameAr: 'Delay in issuing a credit note', nameEn: 'Delay in issuing a credit note', parentId: 1 },
      { id: 2, nameAr: 'Delay in issuing repair authorization', nameEn: 'Delay in issuing repair authorization', parentId: 2 },
      { id: 2, nameAr: 'Cancelation Delay', nameEn: 'Cancelation Delay', parentId: 2 },
      // { id: 2, nameAr: '', nameEn: '', parentId: 2 },
    ];
    return this.caseTitleTypes;
  }

  getCities(): LookupDto[] {

    this.cities = [
      {
        id: AppDefaultValues.DropDownAllOption,
        nameAr: AppDefaultValues.DropDownAllOptionAr,
        nameEn: AppDefaultValues.DropDownAllOptionEn,
      },
      { id: 1, nameAr: 'Jedah', nameEn: 'Jedah' },
      { id: 2, nameAr: 'Riyadh ', nameEn: 'Riyadh' },
    ];
    return this.cities;
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
