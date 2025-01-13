import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
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
      const success = await this.authService.signupWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );

      if (success) {
        this.router.navigate(['/']);
      } else {
        throw new Error('Signup failed');
      }
    } catch (error: unknown) {
      this.errorMessage =
        error instanceof Error
          ? error.message
          : 'Signup failed. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
