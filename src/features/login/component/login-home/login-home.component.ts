import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Auth } from '../../core/service/auth/auth';
import { LoginForm } from './login-home.type';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-home',
  imports: [MatCardModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  templateUrl: './login-home.component.html',
  styleUrl: './login-home.component.scss'
})
export class LoginHomeComponent {

  #router = inject(Router);

  #auth = inject(Auth);

  #fb = inject(NonNullableFormBuilder);

  loginFormGroup = this.#fb.group<LoginForm>({
    username: this.#fb.control('', { validators: [Validators.required] }),
    password: this.#fb.control('', { validators: [Validators.required] })
  })

  logIn(): void {
    const { username, password } = this.loginFormGroup.value;
    if (username && password) {
      const logged = this.#auth.logOn({ username, password });
      if (logged) {
        this.#router.navigate(['/dashboard'])
      }
    }
  }
}
