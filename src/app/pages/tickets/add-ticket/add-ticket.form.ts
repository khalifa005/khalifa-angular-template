import { AppDefaultValues } from './../../../@core/utils/static-data/default-values';
import { RequiredFileType, numeric, RquiredFileUploadValidationSizeInMB } from '../../../@core/utils/static-data/form.validation-helpers';
import { alphaArabic } from '../../../@core/utils/static-data/form.validation-helpers';
import { optionalCarPolicyRequiredValidator } from '../../../@core/utils/static-data/form.validation-helpers';
import { state } from "@angular/animations";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { zip } from "rxjs";
import { TicketDto } from "../models/ticket.dto";
import { calculatedFileSizeInKB } from '../../../@core/utils/helpers-function';

export class TicketForm extends FormGroup {
  readonly categoryId = this.get('categoryId') as FormControl;
  readonly insuranceTypeId = this.get('insuranceTypeId') as FormControl;
  readonly caseTitleTypeId = this.get('caseTitleTypeId') as FormControl;

  readonly cancellationRequestDate = this.get('cancellationRequestDate') as FormControl;

  readonly policyNumber = this.get('policyNumber') as FormControl;
  readonly claimNumber = this.get('claimNumber') as FormControl;
  readonly plateNumber = this.get('plateNumber') as FormControl;
  readonly plateLetters = this.get('plateLetters') as FormControl;
  readonly najmCaseId = this.get('najmCaseId') as FormControl;

  readonly cityId = this.get('cityId') as FormControl;

  readonly title = this.get('title') as FormControl;
  readonly description = this.get('description') as FormControl;
  readonly file = this.get('file') as FormControl;
  // readonly image = this.get('image') as FormControl;

  constructor(readonly model: TicketDto, readonly fb: FormBuilder = new FormBuilder())
  {
    super(

      fb.group({
        // categoryId: [model?.categoryId, [Validators.required, numeric]],

        categoryId: [model?.categoryId, [Validators.required, Validators.max(2), Validators.min(1) ]],
        insuranceTypeId: [model?.insuranceTypeId, [Validators.required, Validators.min(1)]],
        caseTitleTypeId: [model?.caseTitleTypeId, [Validators.required,Validators.min(1)]],

        cancellationRequestDate: [model?.cancellationRequestDate],
        policyNumber: [model?.policyNumber],

        //required in certin cases
        claimNumber: [model?.claimNumber, Validators.required],
        plateNumber: [model?.plateNumber, [Validators.required, numeric]],
        plateLetters: [model?.plateLetters,[ Validators.required, alphaArabic]],

        najmCaseId: [model?.najmCaseId, Validators.required],
        cityId: [model?.cityId, [Validators.required,Validators.min(1)]],
        title: [model?.title, Validators.required],
        description: [model?.description],
        // file: [model?.file, [Validators.required, RquiredFileUploadValidationSize(1)]],
        file: [model?.file, [Validators.required, RequiredFileType('png'), RquiredFileUploadValidationSizeInMB(1)]],
    }).controls

    );

    this.trackInsuranceTypeIdValue();
  }

  private trackInsuranceTypeIdValue(): void {
    this.insuranceTypeId.valueChanges.subscribe((insuranceTypeIdValue: number) => {

      this.caseTitleTypeId.reset(AppDefaultValues.DropDownAllOption);

      if(insuranceTypeIdValue === 2){
      this.policyNumber.setValidators([Validators.required]);
      this.claimNumber.setValidators([Validators.required]);
      this.plateLetters.setValidators([Validators.required]);
      this.plateNumber.setValidators([Validators.required]);
      this.najmCaseId.setValidators([Validators.required]);
      this.cancellationRequestDate.setValidators([Validators.required]);

      }else{
        this.cancellationRequestDate.clearValidators();
        this.cancellationRequestDate.reset();

        this.policyNumber.clearValidators();
        this.policyNumber.reset();

        this.claimNumber.clearValidators();
        this.claimNumber.reset();

        this.plateLetters.clearValidators();
        this.plateLetters.reset();

        this.plateNumber.clearValidators();
        this.plateNumber.reset();

        this.najmCaseId.clearValidators();
        this.najmCaseId.reset();
      }

      this.cancellationRequestDate.updateValueAndValidity();
      this.policyNumber.updateValueAndValidity();
      this.claimNumber.updateValueAndValidity();
      this.plateLetters.updateValueAndValidity();
      this.plateNumber.updateValueAndValidity();
      this.najmCaseId.updateValueAndValidity();
    });
}

}




//validation exampels
// previousDateOnly: ValidatorFn = (control: AbstractControl) =>
//           control?.value == 'test'
//             ? { date: 'the data is the same'}
//             : null;

// checkInitialValidation: ValidatorFn = (control: AbstractControl ): ValidationErrors | null =>
// {
//   const isMatchingWidgetBoudary = control.get('isMatchingWidgetBoudary');
//   const surveyorVisitDate = control.get('surveyorVisitDate');

//   if (isMatchingWidgetBoudary.value && surveyorVisitDate.value) {
//     control.get('comment').setErrors(null);
//     control.get('engineerOfficeNote').setErrors(null);
//     control.get('isMatchingWidgetBoudary').setErrors(null);
//     control.get('surveyorVisitDate').setErrors(null);
//     return null;
//   }

//   return { invalidForm: true };
// };

// surveyorApproveForm!: FormGroup;

// formControlValueChanged() {
//   this.surveyorApproveForm.get('engineerOfficeNote')
//     .valueChanges.subscribe((note: string) => {
//       if (note.length > 0) {
//         // this.isAcceptDisabled = true;
//       } else {
//         // this.isAcceptDisabled = false;
//       }
//     });
// }


//forms example
// formss = this.fb.group({
//   addressLine2: [null, Validators.required],
//   city2: [],
//   state2: ['Ohio'],
//   zip2: [null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]
// });
