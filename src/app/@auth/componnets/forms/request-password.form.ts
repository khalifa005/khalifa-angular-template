import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { numeric } from "../../../@core/utils/static-data/form.regx";


export class RequestPasswordDTO{
    email : string;
}


export class RequestPasswordForm extends FormGroup{

    readonly email = this.get('email') as FormControl;


constructor(readonly model: RequestPasswordDTO , readonly fb: FormBuilder = new FormBuilder()){

 super(
    fb.group({
        email :[model?.email, [Validators.required,Validators.email]],
    }).controls
  );

}

}
