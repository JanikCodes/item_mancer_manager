import { Inject, Injectable } from '@angular/core';
import { HttpService } from '../../http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseEntityService<T> {
  protected prefix: string = '';

  constructor(private httpService: HttpService) {}

  public create(entity: Partial<T>): Observable<T> {
    return this.httpService.post<T>(this.prefix, entity);
  }

  public findAll(): Observable<T[]> {
    return this.httpService.get<T[]>(`${this.prefix}`);
  }

  public getById(id: number): Observable<T> {
    return this.httpService.get<T>(`${this.prefix}/${id}`);
  }

  public delete(id: number): Observable<void> {
    return this.httpService.delete<void>(`${this.prefix}/${id}`);
  }
}
