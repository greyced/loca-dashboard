import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardContentAttendanceComponent } from './dashboard-content-attendance/dashboard-content-attendance.component';
import { DashboardContentTilesComponent } from "./dashboard-content-tiles/dashboard-content-tiles.component";
import { DashboardContentTableComponent } from './dashboard-content-table/dashboard-content-table.component';

@Component({
  selector: 'app-dashboard-content',
  imports: [DashboardContentAttendanceComponent, DashboardContentTilesComponent, DashboardContentTableComponent],
  providers: [],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContentComponent {
}
