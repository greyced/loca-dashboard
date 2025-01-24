import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { FAKE_USERS, PASSWORD } from './auth.mock';
import { User } from '../../../../../model/user';

@Injectable()
export default class FakeAuthService extends Auth {

  authenticatedUser: User | null = null;

  #fakeUsers = FAKE_USERS;

  override logOn(data: { username: string, password: string }): boolean {
    const user = this.#fakeUsers.find(f => f.name === data.username);
    const authenticated = !!user && data.password === PASSWORD;
    if (authenticated) {
      this.authenticatedUser = user;
    }
    return authenticated;
  }

  override logOff(): boolean {
    this.authenticatedUser = null;
    return true;
  }

}
