import { Component, inject, signal } from '@angular/core';
import { ChartType, NgApexchartsModule } from "ng-apexcharts";
import { DashboardStore } from '../../../core/store/dashboard.store';
import { DashboardFacade } from '../../../core/facade/dashboard.facade';

@Component({
  selector: 'app-dashboard-content-attendance',
  imports: [NgApexchartsModule],
  providers: [DashboardStore, DashboardFacade],
  templateUrl: './dashboard-content-attendance.component.html',
  styleUrl: './dashboard-content-attendance.component.scss'
})
export class DashboardContentAttendanceComponent {
  private readonly dashboardFacade = inject(DashboardFacade);
  
  ct: ChartType = "bar";

  chart = {
    type: this.ct,
    height: 350,
  };

  series =  this.dashboardFacade.chartData;

  title = signal({
    text: "Evolution du nombre de visites"
  });
}
