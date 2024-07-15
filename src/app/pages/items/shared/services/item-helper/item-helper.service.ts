import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemHelperService {
  private overview = new Subject<void>();

  public handleOverviewUpdate$ = this.overview.asObservable();

  public updateOverview(): void {
    this.overview.next();
  }
}
