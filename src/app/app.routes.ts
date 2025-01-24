import { Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/component/dashboard.component';
import { ManagerComponent } from '../features/manager/component/manager.component';
import { LoginHomeComponent } from '../features/login/component/login-home/login-home.component';
import { authGuard } from '../features/login/core/guard/auth.guard';
import { Auth } from '../features/login/core/service/auth/auth';
import FakeAuthService from '../features/login/core/service/auth/auth.service';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginHomeComponent,
        providers: [{ provide: Auth, useClass: FakeAuthService}]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    }, {
        path: 'manager',
        component: ManagerComponent,
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }];
