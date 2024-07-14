import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../../shared/module/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { RaritiesAddRarityModal } from '../../shared/modals/add-rarity/rarities-add-rarity.modal';

@Component({
  selector: 'rarities-actions-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './rarities-actions.component.html',
  styleUrl: './rarities-actions.component.scss',
})
export class RaritiesActionsComponent {
  readonly rarityModal = inject(MatDialog);

  public constructor() {}

  public addRarityModal() {
    this.rarityModal.open(RaritiesAddRarityModal, {
      width: '500px',
    });
  }
}
