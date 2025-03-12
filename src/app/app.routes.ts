import { Routes } from '@angular/router';
import { DashboardStore } from '../features/dashboard/core/store/dashboard.store';
import { HomeComponent } from '../features/home/components/home/home.component';
import { NewsService } from '../features/home/core/service/news.service';
import { LoginHomeComponent } from '../features/login/component/login-home/login-home.component';
import { authGuard } from '../features/login/core/guard/auth.guard';
import { Auth } from '../features/login/core/service/auth/auth';
import AuthService from '../features/login/core/service/auth/auth.service';
import { RealEstateDataService } from '../features/manager/core/service/real-estate.service';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginHomeComponent,
        providers: [{ provide: Auth, useClass: AuthService }]
    },
    {
        path: 'home',
        component: HomeComponent,
        //canActivate: [authGuard],
        providers: [NewsService]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./../features/dashboard/component/dashboard.component').then(c => c.DashboardComponent),
        //canActivate: [authGuard],
        providers: [DashboardStore]
    },
    {
        path: 'manager',
        loadComponent: () => import('./../features/manager/component/manager.component').then(c => c.ManagerComponent),
        //canActivate: [authGuard],
        providers: [RealEstateDataService]
    },
    {
        path: 'users',
        loadComponent: () => import('../features/organisation/component/organisation-container/organisation-container.component').then(c => c.OrganisationContainerComponent),
        //canActivate: [authGuard],
        providers: [DashboardStore]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }];
