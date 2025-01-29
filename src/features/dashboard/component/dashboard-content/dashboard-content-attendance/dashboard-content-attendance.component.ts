import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CHART_COLORS } from '../../../core/constants/chart.const';

@Component({
  selector: 'app-dashboard-content-attendance',
  imports: [BaseChartDirective],
  templateUrl: './dashboard-content-attendance.component.html',
  styleUrl: './dashboard-content-attendance.component.scss'
})
export class DashboardContentAttendanceComponent {
  barChartData = {
    datasets: [{
      data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}]
    }],
  }

  barChartOptions: ChartOptions = {
    
  }
}
