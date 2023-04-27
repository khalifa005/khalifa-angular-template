import { ValidatorFn, Validators } from "@angular/forms"
//use this in form validation

export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*%content%#039;');
export const alphaAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z ]*%content%#039;');
export const alphaAllowSpacesAndSplash: ValidatorFn = Validators.pattern('[a-zA-Z /]*%content%#039;');
export const alphaNumeric: ValidatorFn = Validators.pattern('[a-zA-Z0-9]*%content%#039;');
export const alphaNumericAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z0-9 ]*%content%#039;');
export const alphaNumericAllowDash: ValidatorFn = Validators.pattern('[a-zA-Z0-9-]*%content%#039;');
export const numericAllowDash: ValidatorFn = Validators.pattern('[0-9-]*%content%#039;');
export const numeric: ValidatorFn = Validators.pattern('[0-9]*%content%#039;');
export const currency: ValidatorFn = Validators.pattern('[0-9,]*%content%#039;');
export const addressLine: ValidatorFn = Validators.pattern('(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}$)|(([RRHC]{2,}).[0-9]{1,})|(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}.(.*[0-9#])$)');
export const date: ValidatorFn = Validators.pattern('((0|1)d{1})((0|1|2|3)d{1})((19|20)d{2})');


// export class TaskFactors {

//   //to group all the sorting and filtering prop to avoid magic string
//   public static readonly Status = "status";
// }
