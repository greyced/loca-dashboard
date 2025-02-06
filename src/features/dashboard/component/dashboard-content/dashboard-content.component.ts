import { JsonPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { VisitDataService } from '../../core/service/visit.service';
import { DashboardStore } from '../../core/store/dashboard.store';
import { DashboardContentAttendanceComponent } from './dashboard-content-attendance/dashboard-content-attendance.component';

@Component({
  selector: 'app-dashboard-content',
  imports: [DashboardContentAttendanceComponent, MatGridListModule, JsonPipe],
  providers: [DashboardStore, VisitDataService],
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss'
})
export class DashboardContentComponent {

  readonly #store = inject(DashboardStore);

  tiles = computed(() => ([
    {text: `${this.#store.nbAppointmentMade()} Appointments made`, cols: 3, rows: 1, color: 'lightblue'},
    {text: `${this.#store.nbVisits()} Visits`, cols: 1, rows: 2, color: 'lightgreen'},
    {text: `${this.#store.averageDuration()} secondes average`, cols: 1, rows: 1, color: 'lightpink'},
    {text: `${this.#store.nbVisitsWithFiber()} Visits with fiber`, cols: 2, rows: 1, color: '#DDBDF1'}
  ]));

}
