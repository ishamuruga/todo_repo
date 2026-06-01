import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'isAuthenticated';
  private readonly mockUserId = 'demo';
  private readonly mockPassword:any = 'demo123';

  isAuthenticated = signal(localStorage.getItem(this.storageKey) === 'true');

  login(userId: string, password: string): boolean {
    const isValid = userId === this.mockUserId && password === this.mockPassword;

    if (isValid) {
      this.isAuthenticated.set(true);
      localStorage.setItem(this.storageKey, 'true');
      return true;
    }

    return false;
  }

  logout() {
    this.isAuthenticated.set(false);
    localStorage.removeItem(this.storageKey);
  }
}
