import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DashboardStore } from '../../../core/store/dashboard.store';

@Component({
  selector: 'app-dashboard-content-tiles',
  imports: [MatGridListModule, JsonPipe],
  templateUrl: './dashboard-content-tiles.component.html',
  providers: [DashboardStore],
  styleUrl: './dashboard-content-tiles.component.scss'
})
export class DashboardContentTilesComponent {
  readonly #store = inject(DashboardStore);
  tiles = this.#store.tiles;
  loading = this.#store.loading;
}
