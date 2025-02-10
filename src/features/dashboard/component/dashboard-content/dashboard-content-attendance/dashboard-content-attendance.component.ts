import { Component, inject, signal } from '@angular/core';
import { ChartType, NgApexchartsModule } from "ng-apexcharts";
import { DashboardStore } from '../../../core/store/dashboard.store';

@Component({
  selector: 'app-dashboard-content-attendance',
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-content-attendance.component.html',
  styleUrl: './dashboard-content-attendance.component.scss'
})
export class DashboardContentAttendanceComponent {
  readonly #store = inject(DashboardStore);
  
  ct: ChartType = "bar";

  chart = {
    type: this.ct,
    height: 350,
  };



  series =  this.#store.dataChart;

  title = signal({
    text: "Evolution du nombre de visites"
  });
}
