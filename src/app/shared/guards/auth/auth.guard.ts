import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const loggedUser = authService.getUser();
  if (loggedUser == null) {
    // TODO: Maybe show the popover modal here for login instead
    return false;
  }

  return true;
};
