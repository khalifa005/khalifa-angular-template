import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { numeric } from "../../../@core/utils/static-data/form.validation-helpers";

export class RegisterationDTO{
    firstname : string;
    middlename : string;
    lastname :string;
    email :string;
    username : string;
    password: string;
    mobilenumber :string;
    idType :string ;
    nataionalid :string;
    passport:string;
}


export class RegisterForm extends FormGroup{

    readonly firstname = this.get('firstname') as FormControl;
    readonly middlename = this.get('middlename') as FormControl;
    readonly lastname = this.get('lastname') as FormControl;
    readonly email = this.get('email') as FormControl;
    readonly username = this.get('username') as FormControl;
    readonly password = this.get('password') as FormControl;
    readonly mobilenumber = this.get('mobilenumber') as FormControl;
    readonly idType = this.get('idType') as FormControl;
    readonly nataionalid = this.get('nataionalid') as FormControl;
    readonly passport = this.get('passport') as FormControl;


constructor(readonly model: RegisterationDTO , readonly fb: FormBuilder = new FormBuilder()){

 super(
    fb.group({
        firstname :[model?.firstname, Validators.required],
        middlename :[model?.middlename, Validators.required],
        lastname :[model?.lastname, Validators.required],
        email :[model?.email, [Validators.required,Validators.email]],
        username :[model?.username, [Validators.required,Validators.minLength(6)]],
        password :[model?.password, [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{3,}$")]],
        mobilenumber :[model?.mobilenumber, [Validators.required,numeric]],
        idType :[model?.idType],
        nataionalid :[model?.nataionalid],
        passport :[model?.passport],
    }).controls
  );

}

}
