import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.production
    ? 'https://api.jetblacksaas.com/auth'
    : 'http://localhost:3000/auth';
  private auth = inject(Auth);

  constructor(private http: HttpClient) {}

  async loginWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async signupWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<boolean> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  }

  login(credentials: {
    email: string;
    password: string;
  }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/login`,
      credentials
    );
  }

  async logout(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  isAuthenticated(): boolean {
    return !!this.auth.currentUser;
  }
}
