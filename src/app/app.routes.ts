import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: 'items',
    loadComponent: () =>
      import('./pages/items/items.page').then((p) => p.ItemsPage),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((p) => p.LoginPage),
  },
];
