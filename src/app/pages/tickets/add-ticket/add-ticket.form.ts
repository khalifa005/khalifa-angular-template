import { state } from "@angular/animations";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { zip } from "rxjs";
import { TicketDto } from "../models/ticket.dto";

export class TicketForm extends FormGroup {
  readonly addressLine = this.get('addressLine') as FormControl;
  readonly city = this.get('city') as FormControl;
  readonly state = this.get('state') as FormControl;
  readonly zip = this.get('zip') as FormControl;

  constructor(readonly model: TicketDto, readonly fb: FormBuilder = new FormBuilder())
  {
    super(

      fb.group({
      addressLine: [model?.addressLine, Validators.required],
      city: [model?.city, Validators.required],
      state: [model?.state, Validators.required],
      zip: [model?.zip, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]]
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
