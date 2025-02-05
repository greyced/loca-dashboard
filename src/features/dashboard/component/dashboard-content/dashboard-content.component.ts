import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardContentAttendanceComponent } from './dashboard-content-attendance/dashboard-content-attendance.component';
import { Tile } from '../../../../models/tiles.model';

@Component({
  selector: 'app-dashboard-content',
  imports: [DashboardContentAttendanceComponent, MatGridListModule],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {
  tiles: Tile[] = [
    {text: '48% demos', cols: 3, rows: 1, color: 'lightblue'},
    {text: '350 Visits', cols: 1, rows: 2, color: 'lightgreen'},
    {text: '60% fibrés', cols: 1, rows: 1, color: 'lightpink'},
    {text: '12% suivi achat', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
