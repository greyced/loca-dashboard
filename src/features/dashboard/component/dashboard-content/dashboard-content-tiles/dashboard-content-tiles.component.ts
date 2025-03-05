import { JsonPipe } from '@angular/common';
import { Component, computed, inject, OnInit, resource, signal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { VisitDataService } from '../../../core/service/visit.service';
import { DashboardStore, DashboardVStore } from '../../../core/store/dashboard.store';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-content-tiles',
  imports: [MatGridListModule, JsonPipe],
  templateUrl: './dashboard-content-tiles.component.html',
  providers: [DashboardStore, VisitDataService, DashboardVStore],
  styleUrl: './dashboard-content-tiles.component.scss'
})
export class DashboardContentTilesComponent implements OnInit {
  readonly #store = inject(DashboardStore);
  readonly #store2 = inject(DashboardVStore);
  tiles = this.#store.tiles;
  loading = this.#store.loading;
  result = this.#store2.visits;

  ngOnInit(){
    
  }


}
