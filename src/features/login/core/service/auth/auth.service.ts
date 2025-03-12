import { inject, Injectable } from '@angular/core';
import { Auth } from './auth';
import { FAKE_USERS, PASSWORD } from './auth.mock';
import { User } from '../../../../../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserStore } from '../../../../../core/store/user.store';
import { map, Observable, of, tap } from 'rxjs';

@Injectable()
export default class AuthService extends Auth {

  private baseUrl = 'https://loca-dashboard-back.onrender.com';

  private readonly http = inject(HttpClient);

  private readonly userStore = inject(UserStore);

  override logOn({ mail, password }: { mail: string, password: string }): Observable<boolean> {
    if (!mail || !password) {
      return of(false);
    }

    const params: HttpParams = new HttpParams()
      .append('mail', mail)
      .append('password', password);

    return this.http.get<User>(`${this.baseUrl}/user/login`, { params })
      .pipe(tap((user) => this.userStore.logOn(user)), map((user) => !!user));
  }

  override logOff(): boolean {
    this.userStore.logOff();
    return true;
  }

}
