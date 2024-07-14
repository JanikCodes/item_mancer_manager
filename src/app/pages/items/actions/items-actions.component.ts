import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/module/material/material.module';

@Component({
  selector: 'items-actions-component',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './items-actions.component.html',
  styleUrl: './items-actions.component.scss',
})
export class ItemsActionsComponent {}
