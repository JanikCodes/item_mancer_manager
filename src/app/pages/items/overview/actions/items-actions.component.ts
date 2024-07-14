import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../shared/module/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { ItemsAddItemModal } from '../../shared/modals/add-item/items-add-item.modal';

@Component({
  selector: 'items-actions-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './items-actions.component.html',
  styleUrl: './items-actions.component.scss',
})
export class ItemsActionsComponent {
  readonly itemModal = inject(MatDialog);

  public constructor() {}

  public addItemModal() {
    this.itemModal.open(ItemsAddItemModal, {
      width: '500px',
    });
  }
}
