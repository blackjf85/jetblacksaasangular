import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  ButtonComponent,
  CardComponent,
  InputComponent,
} from '../../../libs/shared/ui-components/src/lib/ui-components';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CardComponent, InputComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  demoInputValue = '';
  isDarkMode = false;
  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    // Remove any existing dark class first
    document.documentElement.classList.remove('dark');

    // Only apply dark mode if user explicitly chose it
    this.isDarkMode = savedTheme === 'dark';
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }

  onDemoSubmit(event: Event) {
    event.preventDefault();
    console.log('Demo form submitted');
  }
}
