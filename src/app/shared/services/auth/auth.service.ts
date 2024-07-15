import { Injectable } from '@angular/core';
import { IAuthToken } from './auth.service.types';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../entities/user/user.entity';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: Observable<User | null>;
  public token: Observable<string | null>;

  private userSubject: BehaviorSubject<User | null>;
  private tokenSubject: BehaviorSubject<string | null>;

  constructor() {
    this.userSubject = new BehaviorSubject<User | null>(this.getUser());
    this.tokenSubject = new BehaviorSubject<string | null>(this.getToken());

    this.user = this.userSubject.asObservable();
    this.token = this.tokenSubject.asObservable();
  }

  public setUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  public getUser(): User | null {
    const userString = localStorage.getItem('user');
    return userString ? (JSON.parse(userString) as User) : null;
  }

  public getToken(): string | null {
    const tokenString = localStorage.getItem('token');
    return tokenString ? tokenString : null;
  }

  public clearUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.tokenSubject.next(null);
  }
}
