import { Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/component/dashboard.component';
import { ManagerComponent } from '../features/manager/component/manager.component';

export const routes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent
}, {
    path: 'manager',
    component: ManagerComponent
}];
