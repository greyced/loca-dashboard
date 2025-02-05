import { Component, signal } from '@angular/core';
import { ChartType, NgApexchartsModule } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-users-container',
  imports: [NgApexchartsModule],
  templateUrl: './users-container.component.html',
  styleUrl: './users-container.component.scss'
})
export class UsersContainerComponent {

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
    text: "My First Angular Chart"
  })
}
