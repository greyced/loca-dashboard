import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal } from '@angular/core';
import { VisitDataService } from '../../core/service/visit.service';
import { DashboardStore } from '../../core/store/dashboard.store';
import { DashboardContentAttendanceComponent } from './dashboard-content-attendance/dashboard-content-attendance.component';
import { DashboardContentTilesComponent } from "./dashboard-content-tiles/dashboard-content-tiles.component";

@Component({
  selector: 'app-dashboard-content',
  imports: [DashboardContentAttendanceComponent, JsonPipe, DashboardContentTilesComponent],
  providers: [DashboardStore, VisitDataService],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DashboardContentComponent {

  readonly #store = inject(DashboardStore);

  constructor(){
    this.#store.reload();
  }

  visits = linkedSignal(() => this.#store.visitResource.value() || []);
}
