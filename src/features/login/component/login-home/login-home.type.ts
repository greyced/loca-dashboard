import { FormControl } from "@angular/forms";

export interface LoginForm {
    mail: FormControl<string>;
    password: FormControl<string>;
}