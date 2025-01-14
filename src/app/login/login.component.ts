import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { ButtonComponent } from '../../../libs/shared/ui-components/src/lib/ui-components';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ButtonComponent],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            [(ngModel)]="credentials.email"
            name="email"
            required
            autocomplete="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            [(ngModel)]="credentials.password"
            name="password"
            required
            autocomplete="current-password"
          />
        </div>
        <jb-button type="submit" [disabled]="loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </jb-button>
        <div *ngIf="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </form>
      <p>Don't have an account? <a routerLink="/signup">Sign up</a></p>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  errorMessage: string | null = null;
  loading = false;

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

      // Redirect to home page after successful login
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
