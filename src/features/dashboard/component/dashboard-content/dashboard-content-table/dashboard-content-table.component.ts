import { Component, inject, Signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DashboardStore } from '../../../core/store/dashboard.store';
import { DetailedVisit } from '../../../model/dashboard.model';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { DashboardFacade } from '../../../core/facade/dashboard.facade';


@Component({
  selector: 'app-dashboard-content-table',
  imports: [MatTableModule, JsonPipe, CommonModule, DatePipe],
  templateUrl: './dashboard-content-table.component.html',
  styleUrl: './dashboard-content-table.component.scss',
  providers: [DashboardFacade, DashboardStore]
})
export class DashboardContentTableComponent {
  private readonly dashboardFacade = inject(DashboardFacade);

  readonly visits: Signal<DetailedVisit[]> = this.dashboardFacade.detailedVisits;

  displayedColumns: string[] = ['date', 'duration', 'user', 'realEstate', 'actions'];

}
