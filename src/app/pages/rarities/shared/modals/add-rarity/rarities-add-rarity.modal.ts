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
  selector: 'rarities-add-rarity-modal',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rarities-add-rarity.modal.html',
  styleUrl: './rarities-add-rarity.modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaritiesAddRarityModal {
  readonly dialogRef = inject(MatDialogRef<RaritiesAddRarityModal>);

  public addRarityForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    color: new FormControl<string>('', Validators.required),
  });
}
