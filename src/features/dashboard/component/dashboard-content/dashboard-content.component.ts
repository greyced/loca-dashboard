import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardContentAttendanceComponent } from './dashboard-content-attendance/dashboard-content-attendance.component';
import { DashboardContentTilesComponent } from "./dashboard-content-tiles/dashboard-content-tiles.component";

@Component({
  selector: 'app-dashboard-content',
  imports: [DashboardContentAttendanceComponent, DashboardContentTilesComponent],
  providers: [],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContentComponent {
}
