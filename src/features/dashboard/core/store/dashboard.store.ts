import { httpResource } from "@angular/common/http";
import { computed } from "@angular/core";
import { patchState, signalMethod, signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { OneWeekAgo, Today } from "../../../../core/const/time.const";
import { Visit } from "../../model/dashboard.model";
import { computeAverageTime, computeChartData, computeNbAppointment, computeNbVisites, computeNbVisitsWithFiber, computeTiles } from "../utils/dashboard.utils";

export const DashboardStore = signalStore(
    withState({
        filter: {
            from: OneWeekAgo,
            to: Today
        }
    }),
    withProps((store) => {
        const fromSeconds = computed(() => store.filter.from().getTime());
        const toSeconds = computed(() => store.filter.to().getTime());
        return {
            visitStore: httpResource<Visit[]>({ url: `https://loca-dashboard-back.onrender.com/visits?from=${fromSeconds()}&to=${toSeconds()}` })
        }
    }),
    withComputed((store) => {
        const nbVisits = computed(() => computeNbVisites(store.visitStore.value() || []));
        const nbAppointmentMade = computed(() => computeNbAppointment(store.visitStore.value() || []));
        const averageDuration = computed(() => computeAverageTime(store.visitStore.value() || []));
        const nbVisitsWithFiber = computed(() => computeNbVisitsWithFiber(store.visitStore.value() || []));
        const visits = computed(() => store.visitStore.value() || []);
        const loading = store.visitStore.isLoading;
        const tiles = computed(() => computeTiles(nbAppointmentMade(), nbVisits(), averageDuration(), nbVisitsWithFiber()))
        const dataChart = computed(() => computeChartData(store.visitStore.value() || []));
        return {
            nbVisits,
            averageDuration,
            nbAppointmentMade,
            nbVisitsWithFiber,
            visits,
            tiles,
            loading,
            dataChart
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