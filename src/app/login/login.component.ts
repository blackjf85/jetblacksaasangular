import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import {
  ButtonComponent,
  InputComponent,
  CardComponent,
} from '../../../libs/shared/ui-components/src/lib/ui-components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ButtonComponent,
    InputComponent,
    CardComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  errors = {
    email: '',
    password: '',
  };

  errorMessage: string | null = null;
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    if (!this.credentials.email || !this.credentials.password) {
      this.errorMessage = 'Please enter both email and password';
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    try {
      const success = await this.authService.loginWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );

      if (!success) {
        throw new Error('Invalid email or password');
      }

      this.router.navigate(['/']);
    } catch (error: unknown) {
      this.errorMessage =
        error instanceof Error
          ? error.message
          : 'Login failed. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
