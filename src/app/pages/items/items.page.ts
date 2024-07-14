import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { ItemsOverviewComponent } from './overview/items-overview.component';
import { ItemsActionsComponent } from './actions/items-actions.component';

@Component({
  selector: 'items-page',
  standalone: true,
  imports: [MaterialModule, ItemsOverviewComponent, ItemsActionsComponent],
  templateUrl: './items.page.html',
  styleUrl: './items.page.scss',
})
export class ItemsPage {}
