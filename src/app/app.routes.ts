import { Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/component/dashboard.component';
import { ManagerComponent } from '../features/manager/component/manager.component';
import { LoginHomeComponent } from '../features/login/component/login-home/login-home.component';
import { authGuard } from '../features/login/core/guard/auth.guard';
import { Auth } from '../features/login/core/service/auth/auth';
import FakeAuthService from '../features/login/core/service/auth/auth.service';
import { HomeComponent } from '../features/home/components/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginHomeComponent,
        providers: [{ provide: Auth, useClass: FakeAuthService}],
        canActivate: [authGuard]
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./../features/dashboard/component/dashboard.component').then(c => c.DashboardComponent)
    }, {
        path: 'manager',
        loadComponent: () => import('./../features/manager/component/manager.component').then(c => c.ManagerComponent),
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }];
