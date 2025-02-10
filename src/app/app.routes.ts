import { Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/component/dashboard.component';
import { ManagerComponent } from '../features/manager/component/manager.component';
import { LoginHomeComponent } from '../features/login/component/login-home/login-home.component';
import { authGuard } from '../features/login/core/guard/auth.guard';
import { Auth } from '../features/login/core/service/auth/auth';
import FakeAuthService from '../features/login/core/service/auth/auth.service';
import { HomeComponent } from '../features/home/components/home/home.component';
import { RealEstateDataService } from '../features/manager/core/service/real-estate-data.service';
import { VisitDataService } from '../features/dashboard/core/service/visit.service';
import { DashboardStore } from '../features/dashboard/core/store/dashboard.store';
import { NewsService } from '../features/home/core/service/news.service';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginHomeComponent,
        providers: [{ provide: Auth, useClass: FakeAuthService}],
        canActivate: [authGuard]
    },
    {
        path:'home',
        component: HomeComponent,
        providers:[NewsService]
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./../features/dashboard/component/dashboard.component').then(c => c.DashboardComponent),
        providers:[VisitDataService, DashboardStore]
    }, 
    {
        path: 'manager',
        loadComponent: () => import('./../features/manager/component/manager.component').then(c => c.ManagerComponent),
        canActivate: [authGuard],
        providers:[RealEstateDataService]
    },
    {
        path: 'users',
        loadComponent: () => import('./../features/user/component/users-container/users-container.component').then(c => c.UsersContainerComponent) ,
        providers:[VisitDataService, DashboardStore]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }];
