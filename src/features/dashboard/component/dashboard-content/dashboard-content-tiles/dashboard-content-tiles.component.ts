import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardStore } from '../../../core/store/dashboard.store';
import { DashboardFacade } from '../../../core/facade/dashboard.facade';

@Component({
  selector: 'app-dashboard-content-tiles',
  imports: [MatGridListModule],
  templateUrl: './dashboard-content-tiles.component.html',
  providers: [DashboardStore, DashboardFacade],
  styleUrl: './dashboard-content-tiles.component.scss'
})
export class DashboardContentTilesComponent {
  private readonly dashboardFacade = inject(DashboardFacade);
  tiles = this.dashboardFacade.tiles;
  loading = this.dashboardFacade.visitsLoading;
}
