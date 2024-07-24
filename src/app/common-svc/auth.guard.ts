import { CanActivateFn, Router } from '@angular/router';
import { AuthSvcService } from './auth-svc.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthSvcService);
  const router = inject(Router);

  if (authService.getLoginData()) {
    return true;
  } else {    
    authService.setLoginData(false);
    router.navigate(['/login']);
    return false;
  }
};
