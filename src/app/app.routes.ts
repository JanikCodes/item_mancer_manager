import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'items',
    loadComponent: () =>
      import('./pages/items/items.page').then((p) => p.ItemsPage),
  },
];
