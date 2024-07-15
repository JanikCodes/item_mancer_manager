import { Injectable } from '@angular/core';
import { BaseEntityService } from '../base/base-entity.service';
import { Item } from '../../../entities/item/item.entity';
import { HttpService } from '../../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends BaseEntityService<Item> {
  constructor(httpService: HttpService) {
    super(httpService);
    this.prefix = 'items';
  }
}
