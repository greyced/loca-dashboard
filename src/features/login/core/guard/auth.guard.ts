import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserStore } from '../../../../core/store/user.store';

export const authGuard: CanActivateFn = (route, state) => {
  const userStore = inject(UserStore);
  return userStore.userLogged()
};
