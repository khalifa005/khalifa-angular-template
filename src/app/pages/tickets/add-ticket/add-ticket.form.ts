import { numeric } from '../../../@core/utils/static-data/form.regx';
import { alphaArabic } from '../../../@core/utils/static-data/form.regx';
import { state } from "@angular/animations";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { zip } from "rxjs";
import { TicketDto } from "../models/ticket.dto";

export class TicketForm extends FormGroup {
  readonly categoryId = this.get('categoryId') as FormControl;
  readonly insuranceTypeId = this.get('insuranceTypeId') as FormControl;
  readonly caseTitleTypeId = this.get('caseTitleTypeId') as FormControl;

  readonly policyNumber = this.get('policyNumber') as FormControl;
  readonly claimNumber = this.get('claimNumber') as FormControl;
  readonly plateNumber = this.get('plateNumber') as FormControl;
  readonly plateLetters = this.get('plateLetters') as FormControl;
  readonly najmCaseId = this.get('najmCaseId') as FormControl;

  readonly cityId = this.get('cityId') as FormControl;

  readonly title = this.get('title') as FormControl;
  readonly description = this.get('description') as FormControl;

  constructor(readonly model: TicketDto, readonly fb: FormBuilder = new FormBuilder())
  {
    super(

      fb.group({
        // categoryId: [model?.categoryId, [Validators.required, numeric]],

        categoryId: [model?.categoryId, [Validators.required, Validators.max(2), Validators.min(1) ]],
        insuranceTypeId: [model?.insuranceTypeId, [Validators.required, Validators.min(1)]],
        caseTitleTypeId: [model?.caseTitleTypeId, [Validators.required,Validators.min(1)]],

        policyNumber: [model?.policyNumber, Validators.required],

        //required in certin cases
        claimNumber: [model?.claimNumber, Validators.required],
        plateNumber: [model?.plateNumber, [Validators.required, numeric]],
        plateLetters: [model?.plateLetters,[ Validators.required, alphaArabic]],

        najmCaseId: [model?.najmCaseId, Validators.required],
        cityId: [model?.cityId, [Validators.required,Validators.min(1)]],
        title: [model?.title, Validators.required],
        description: [model?.description],

      // zip: [model?.zip, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]
    }).controls

    );
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
