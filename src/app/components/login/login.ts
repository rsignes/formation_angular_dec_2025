import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatError,
    MatFormField,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatLabel,
    MatIcon,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  authService = inject(AuthService);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, this.createPasswordStrengthValidator()]],
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulaire valide, données soumises :', this.loginForm.value);
      this.authService.login(this.email?.value, this.password?.value).subscribe(console.log);
    } else {
      console.error('Le formulaire contient des erreurs.');
      this.loginForm.markAllAsTouched();
    }
  }

  createPasswordStrengthValidator(): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }

      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);

      const isStrong = hasUpperCase && hasLowerCase && hasNumeric && value.length >= 4;

      return !isStrong ? { passwordStrength: true } : null;
    };
  }
}
