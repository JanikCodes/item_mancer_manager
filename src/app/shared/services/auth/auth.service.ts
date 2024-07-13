import { Injectable } from '@angular/core';
import { IAuthToken } from './auth.service.types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<IAuthToken | null>;

  private userSubject: BehaviorSubject<IAuthToken | null>;

  constructor() {
    this.userSubject = new BehaviorSubject<IAuthToken | null>(this.getUser());
    this.user = this.userSubject.asObservable();
  }

  public setUser(user: IAuthToken): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  public getUser(): IAuthToken | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  public clearUser(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
