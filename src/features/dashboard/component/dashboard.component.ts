import { Component } from '@angular/core';
import { DashboardHeaderComponent } from "./dashboard-header/dashboard-header.component";
import { DashboardFilterComponent } from "./dashboard-filter/dashboard-filter.component";
import { DashboardContentComponent } from "./dashboard-content/dashboard-content.component";

@Component({
  selector: 'app-dashboard',
  imports: [DashboardHeaderComponent, DashboardFilterComponent, DashboardContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
