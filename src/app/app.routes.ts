import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'items',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/items/items.page').then((p) => p.ItemsPage),
  },
  {
    path: 'rarities',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/rarities/rarities.page').then((p) => p.RaritiesPage),
  },
];
