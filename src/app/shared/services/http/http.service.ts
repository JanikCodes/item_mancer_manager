import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SnackBarService } from '../snack-bar/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private backendUrl = environment.backendUrl;

  public constructor(
    private http: HttpClient,
    private snackBarService: SnackBarService
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
    const appendedUrl = `${this.backendUrl}/${url}`;
    return this.http.get<T>(appendedUrl, options);
  }

  public post(url: string, body: any | null): Observable<Object> {
    const appendedUrl = `${this.backendUrl}/${url}`;

    return this.http.post(appendedUrl, body);
  }
}
