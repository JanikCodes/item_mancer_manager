import { Injectable } from '@angular/core';
import { BaseEntityService } from '../base/base-entity.service';
import { Rarity } from '../../../entities/rarity/rarity.entity';
import { HttpService } from '../../http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RarityService extends BaseEntityService<Rarity> {
  constructor(httpService: HttpService) {
    super(httpService);
    this.prefix = 'rarities';
  }

  public getUserOverview(): Observable<Rarity[]> {
    return this.httpService.get<Rarity[]>('rarity-overview');
  }
}
