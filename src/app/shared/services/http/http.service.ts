import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SnackBarService } from '../snack-bar/snack-bar.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private backendUrl = environment.backendUrl;

  public constructor(
    private http: HttpClient,
    private snackBarService: SnackBarService,
    private authService: AuthService,
    private router: Router
  ) {}

  public get<T>(
    url: string,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      withCredentials?: boolean;
    }
  ): Observable<T> {
    const appendedUrl = `${this.backendUrl}/${url}/`;
    return this.http
      .get<T>(appendedUrl, options)
      .pipe(catchError(this.handleError.bind(this)));
  }

  public post<T>(url: string, body: any | null): Observable<T> {
    const appendedUrl = `${this.backendUrl}/${url}/`;

    return this.http
      .post<T>(appendedUrl, body)
      .pipe(catchError(this.handleError.bind(this)));
  }

  public delete<T>(url: string): Observable<T> {
    const appendedUrl = `${this.backendUrl}/${url}/`;
    return this.http
      .delete<T>(appendedUrl)
      .pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      this.authService.clearUser();
      this.router.navigateByUrl('');
    } else {
      this.snackBarService.showSnackBar('Oop. Something went wrong..', '', {
        duration: 3000,
      });
    }

    return throwError(() => new Error('Something went wrong'));
  }
}
