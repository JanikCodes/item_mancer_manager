import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../../shared/module/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'items-add-item-modal',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './items-add-item.modal.html',
  styleUrl: './items-add-item.modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsAddItemModal {
  readonly dialogRef = inject(MatDialogRef<ItemsAddItemModal>);

  public addItemForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    description: new FormControl<string>(''),
    rarity: new FormControl<string>('', Validators.required),
  });
}
