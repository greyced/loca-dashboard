import { httpResource } from "@angular/common/http";
import { computed } from "@angular/core";
import { patchState, signalMethod, signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { OneWeekAgo, Today } from "../../../../core/const/time.const";
import { DetailedVisit, Visit } from "../../model/dashboard.model";
import { computeAverageTime, computeChartData, computeNbAppointment, computeNbVisites, computeNbVisitsWithFiber, computeTiles } from "../utils/dashboard.utils";

const initialState: { filter: { from: Date, to: Date }, visits: Visit[], detailedVisits: DetailedVisit[] } = {
    filter: {
        from: OneWeekAgo,
        to: Today
    },
    visits: [],
    detailedVisits: []
};

export const DashboardStore = signalStore(
    withState(initialState),
    withProps((store) => {
        const fromSeconds = computed(() => store.filter.from().getTime());
        const toSeconds = computed(() => store.filter.to().getTime());
        return {
            visitStore: httpResource<Visit[]>({ url: `https://loca-dashboard-back.onrender.com/visits?from=${fromSeconds()}&to=${toSeconds()}` }),
            visitDetailsStore: httpResource<DetailedVisit[]>({ url: `https://loca-dashboard-back.onrender.com/visits/detailed?from=${fromSeconds()}&to=${toSeconds()}` }),
        }
    }),
    withComputed((store) => {
        const nbVisits = computed(() => computeNbVisites(store.visitStore.value() || []));
        const nbAppointmentMade = computed(() => computeNbAppointment(store.visitStore.value() || []));
        const averageDuration = computed(() => computeAverageTime(store.visitStore.value() || []));
        const nbVisitsWithFiber = computed(() => computeNbVisitsWithFiber(store.visitStore.value() || []));
        const visits = computed(() => store.visitStore.value() || []);
        const visitsLoading = store.visitStore.isLoading;
        const tiles = computed(() => computeTiles(nbAppointmentMade(), nbVisits(), averageDuration(), nbVisitsWithFiber()))
        const dataChart = computed(() => computeChartData(store.visitStore.value() || []));
        const detailedVisits = computed(() => store.visitDetailsStore.value() || []);
        const detailedVisitsLoading = store.visitDetailsStore.isLoading;
        return {
            nbVisits,
            averageDuration,
            nbAppointmentMade,
            nbVisitsWithFiber,
            visits,
            tiles,
            visitsLoading,
            dataChart,
            detailedVisits,
            detailedVisitsLoading
        }
    }),
    withMethods((store) => ({
        updateFilter: signalMethod<{ from: Date, to: Date }>((filter) => {
            console.log('updated', filter);
            patchState(store, { filter });
        }),
        reload: () => {
            store.visitStore.reload();
        },
    })),
);