import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RarityHelperService {
  private overview = new Subject<void>();

  public handleOverviewUpdate$ = this.overview.asObservable();

  public updateOverview(): void {
    this.overview.next();
  }
}
