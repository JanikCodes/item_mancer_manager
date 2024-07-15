import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MaterialModule } from '../../../../../shared/module/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Rarity } from '../../../../../shared/entities/rarity/rarity.entity';
import { RarityService } from '../../../../../shared/services/entities/rarity/rarity.service';
import { Item } from '../../../../../shared/entities/item/item.entity';
import { ItemService } from '../../../../../shared/services/entities/item/item.service';
import { ItemHelperService } from '../../services/item-helper/item-helper.service';

@Component({
  selector: 'items-add-item-modal',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './items-add-item.modal.html',
  styleUrl: './items-add-item.modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsAddItemModal implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ItemsAddItemModal>);

  public userRarities: Rarity[] = [];

  public addItemForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
    rarity: new FormControl<string>('', Validators.required),
  });

  public constructor(
    private rarityService: RarityService,
    private itemService: ItemService,
    private itemHelperService: ItemHelperService
  ) {}

  public ngOnInit(): void {
    this.rarityService.getUserOverview().subscribe((result) => {
      this.userRarities = result;
    });
  }

  public async save() {
    const values = this.addItemForm.value;

    const item: Partial<Item> = {
      name: values.name!,
      description: values.description!,
      rarity: { id: values.rarity! },
    };

    this.itemService.create(item).subscribe((createdItem) => {
      this.itemHelperService.updateOverview();
      this.dialogRef.close();
    });
  }
}
