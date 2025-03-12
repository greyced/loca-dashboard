import { inject, Injectable } from "@angular/core";
import { DashboardStore } from "../store/dashboard.store";

@Injectable()
export class DashboardFacade {

    private readonly store = inject(DashboardStore);

    readonly detailedVisits = this.store.detailedVisits;

    readonly detailedVisitsLoading = this.store.detailedVisitsLoading;

    readonly visits = this.store.visits;

    readonly tiles = this.store.tiles;

    readonly visitsLoading = this.store.visitsLoading;

    readonly chartData = this.store.dataChart;

}