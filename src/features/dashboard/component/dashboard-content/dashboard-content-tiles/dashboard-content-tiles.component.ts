import { JsonPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardStore } from '../../../core/store/dashboard.store';
import { DashboardLoader } from '../../../core/loader/dashboard.loader';

@Component({
  selector: 'app-dashboard-content-tiles',
  imports: [MatGridListModule],
  templateUrl: './dashboard-content-tiles.component.html',
  providers: [DashboardStore],
  styleUrl: './dashboard-content-tiles.component.scss'
})
export class DashboardContentTilesComponent {
  readonly #store = inject(DashboardStore);
  tiles = this.#store.tiles;
  loading = this.#store.loading;
}
