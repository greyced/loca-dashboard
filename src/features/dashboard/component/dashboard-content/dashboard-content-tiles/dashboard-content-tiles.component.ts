import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { VisitDataService } from '../../../core/service/visit.service';
import { DashboardStore } from '../../../core/store/dashboard.store';

@Component({
  selector: 'app-dashboard-content-tiles',
  imports: [MatGridListModule],
  templateUrl: './dashboard-content-tiles.component.html',
  providers: [DashboardStore, VisitDataService],
  styleUrl: './dashboard-content-tiles.component.scss'
})
export class DashboardContentTilesComponent {
  readonly #store = inject(DashboardStore);
  tiles = this.#store.tiles;
}
