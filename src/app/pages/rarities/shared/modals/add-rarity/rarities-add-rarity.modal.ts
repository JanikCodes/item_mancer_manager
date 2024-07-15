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
import { Rarity } from '../../../../../shared/entities/rarity/rarity.entity';
import { RarityService } from '../../../../../shared/services/entities/rarity/rarity.service';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { User } from '../../../../../shared/entities/user/user.entity';
import { RarityHelperService } from '../../services/rarity-helper/rarity-helper.service';

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

  public constructor(
    private rarityService: RarityService,
    private authService: AuthService,
    private rarityHelperService: RarityHelperService
  ) {}

  public async save() {
    const values = this.addRarityForm.value;
    const user: User | null = this.authService.getUser();

    const rarity: Partial<Rarity> = {
      name: values.name!,
      color: values.color!,
    };

    console.log(rarity);

    this.rarityService.create(rarity).subscribe((createdRarity) => {
      this.rarityHelperService.updateOverview();
      this.dialogRef.close();
    });
  }
}
