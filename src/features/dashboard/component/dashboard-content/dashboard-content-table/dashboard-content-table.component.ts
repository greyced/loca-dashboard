import { Component, inject, Signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DashboardStore } from '../../../core/store/dashboard.store';
import { DetailedVisit } from '../../../model/dashboard.model';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';


@Component({
  selector: 'app-dashboard-content-table',
  imports: [MatTableModule, JsonPipe, CommonModule, DatePipe],
  templateUrl: './dashboard-content-table.component.html',
  styleUrl: './dashboard-content-table.component.scss',
  providers: [DashboardStore]
})
export class DashboardContentTableComponent {
  private readonly store = inject(DashboardStore);

  readonly visits: Signal<DetailedVisit[]> = this.store.detailedVisits;

  displayedColumns: string[] = ['date', 'duration', 'user', 'realEstate', 'actions'];

}
