import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms"
import { HTMLInputEvent, calculatedFileSizeInKB } from "../helpers-function";
//use this in form validation

// export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*%content%#039;');
export const alphaArabic: ValidatorFn = Validators.pattern('^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){0,30}$');
export const alpha: ValidatorFn = Validators.pattern('[a-zA-Z]*$');
export const alphaAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z ]*$');
export const alphaAllowSpacesAndSplash: ValidatorFn = Validators.pattern('[a-zA-Z /]*$');
export const alphaNumeric: ValidatorFn = Validators.pattern('[a-zA-Z0-9]*$');
export const alphaNumericAllowSpaces: ValidatorFn = Validators.pattern('[a-zA-Z0-9 ]*$');
export const alphaNumericAllowDash: ValidatorFn = Validators.pattern('[a-zA-Z0-9-]*$');
export const numericAllowDash: ValidatorFn = Validators.pattern('[0-9-]*$');
export const numeric: ValidatorFn = Validators.pattern('[0-9]*$');
export const currency: ValidatorFn = Validators.pattern('[0-9,]*$');
export const addressLine: ValidatorFn = Validators.pattern('(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}$)|(([RRHC]{2,}).[0-9]{1,})|(([0-9]{1,}).(.*[a-zA-Z#/&]){2,}.(.*[0-9#])$)');
export const date: ValidatorFn = Validators.pattern('((0|1)d{1})((0|1|2|3)d{1})((19|20)d{2})');

export const arabicCharacters: ValidatorFn = Validators.pattern('^[\u0600-\u06ff ]*$');
export const arabicCharactersWithNumbers: ValidatorFn = Validators.pattern('^[\u0600-\u06ff]^[0-9]*$');
export const englishAndArabicCharactersWithWhiteSpace: ValidatorFn = Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_\ ]*$');
export const englishAndArabicCharactersOnly: ValidatorFn = Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$');



export function optionalCarPolicyRequiredValidator(formControl: AbstractControl) {
  if (!formControl.parent) {
    return null;
  }

  if (formControl.parent.get('insuranceTypeId').value == 2) {
    console.log("requiredIfValidator - fun - predicate");
    console.log(formControl.parent.get('insuranceTypeId'));
    console.log(formControl.parent.get('policyNumber'));
    return Validators.required(formControl.parent.get('policyNumber'));
  }
  return null;
}


export function createPasswordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
          return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

      return !passwordValid ? {passwordStrength:true}: null;
  }
}

//dependent --try to send another param
// if you use this approach you need to track the parent manully
// this.myForm.get('myCheckbox').valueChanges
//     .subscribe(value => {
//         this.myForm.get('myEmailField').updateValueAndValidity();
//     });
export function emailConditionallyRequiredValidator(formControl: AbstractControl) {
  if (!formControl.parent) {
    return null;
  }

  if (formControl.parent.get('myCheckbox').value) {
    return Validators.required(formControl);
  }
  return null;
}

//
/**
 * makes the field required if the predicate function returns true
 * requiredIfValidator(() => this.myForm.get('myCheckbox').value)
 * conditionalValidator(() => this.myForm.get('myCheckbox').value,  pattern(/.+@.+\..+/),)
 */
export function requiredIfValidator(predicate) {
  return (formControl => {
    console.log("requiredIfValidator - fun");
    if (!formControl.parent) {
      return null;
    }
    if (predicate()) {
    console.log("requiredIfValidator - fun - predicate");

      return Validators.required(formControl);
    }
    return null;
  })
}


// <div
// *ngIf="taskCompleteForm.get('notes')!.invalid && (taskCompleteForm.get('notes')!.dirty || taskCompleteForm.get('notes')!.touched)">
// <div i18n="@@mbmu.workflow-services.cadastral-survey.task-submit-form.enterOneNote"
//   *ngIf="taskCompleteForm.errors?.['invalidNote'] && (taskCompleteForm.touched || taskCompleteForm.dirty)"
//   class="cross-validation-error-message alert alert-danger">
//   ادخل ملاحظة واحدة على الاقل
// </div>

// </div>

// checkIfAtLeastOneCommentIsAdded: ValidatorFn = (
//   control: AbstractControl
// ): ValidationErrors | null => {
//   const officeNotes = control.get('officeNotes');
//   const notes = control.get('notes');
//   const subdivisionPlanNotesInput = control.get('subdivisionPlanNotesInput');

//   if (officeNotes.value || notes.value) {
//     control.get('notes').setErrors(null);
//     control.get('officeNotes').setErrors(null);
//     return null;
//   }
//   return { invalidNote: true };
// };

// {
//   validators: this.checkIfAtLeastOneCommentIsAdded,
// }

export function RequiredFileType( type: string ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();
      if ( type.toLowerCase() !== extension.toLowerCase() ) {
        return {
          requiredFileType: true
        };
      }

      return null;
    }

    return null;
  };
}

export function RquiredFileUploadValidationSizeInMB(size: number) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.')[1].toLowerCase();

      let fileInKB = calculatedFileSizeInKB(size)
      if (file.size > fileInKB ) {
        return {
          requiredFileSize: true
        };
      }

      return null;
    }

    return null;
  };

}

