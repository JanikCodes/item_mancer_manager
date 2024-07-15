import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const token = inject(AuthService).getToken();
  if (!token) {
    return next(req);
  }

  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(newReq);
}
