import { Injectable } from '@angular/core';
import { BaseEntityService } from '../base/base-entity.service';
import { Rarity } from '../../../entities/rarity/rarity.entity';
import { HttpService } from '../../http/http.service';
import { IRarityTableElement } from '../../../../pages/rarities/rarities.types';

@Injectable({
  providedIn: 'root',
})
export class RarityService extends BaseEntityService<Rarity> {
  constructor(httpService: HttpService) {
    super(httpService);
    this.prefix = 'rarities';
  }

  public getUserOverview() {
    return this.httpService.get<IRarityTableElement[]>('rarity-overview');
  }
}
