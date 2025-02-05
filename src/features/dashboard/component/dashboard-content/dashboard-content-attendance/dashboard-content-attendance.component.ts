import { Component, signal } from '@angular/core';
import { ChartType, NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: 'app-dashboard-content-attendance',
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-content-attendance.component.html',
  styleUrl: './dashboard-content-attendance.component.scss'
})
export class DashboardContentAttendanceComponent {
  
  ct: ChartType = "bar"

  chart = signal({
    type: this.ct,
    height: 350
  })

  series = signal([
    {
      name: "My-series",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
  ]);

  title = signal({
    text: "Evolution du nombre de visites"
  })
}
