import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/module/material/material.module';
import { RaritiesOverviewComponent } from './overview/rarities-overview.component';
import { RaritiesActionsComponent } from './overview/actions/rarities-actions.component';

@Component({
  selector: 'rarities-page',
  standalone: true,
  imports: [
    MaterialModule,
    RaritiesOverviewComponent,
    RaritiesActionsComponent,
  ],
  templateUrl: './rarities.page.html',
  styleUrl: './rarities.page.scss',
})
export class RaritiesPage {}
