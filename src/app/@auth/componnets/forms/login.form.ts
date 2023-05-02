import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { numeric } from "../../../@core/utils/static-data/form.regx";

export class LoginDTO{
    username : string;
    password: string;
}


export class LoginForm extends FormGroup{

    readonly username = this.get('username') as FormControl;
    readonly password = this.get('password') as FormControl;


constructor(readonly model: LoginDTO , readonly fb: FormBuilder = new FormBuilder()){

 super(
    fb.group({
        username :[model?.username, [Validators.required]],
        password : [model?.password, [Validators.required]],
    }).controls
  );

}

}
