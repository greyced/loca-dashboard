import { computed, inject, Injectable, resource, ResourceStatus, signal } from "@angular/core";
import { patchState, signalMethod, signalState, SignalState, signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { OneWeekAgo, Today } from "../../../../core/const/time.const";
import { VisitDataService } from "../service/visit.service";
import { computeAverageTime, computeChartData, computeNbAppointment, computeNbVisites, computeNbVisitsWithFiber, computeTiles } from "../utils/dashboard.utils";
import { DashboardService } from "../service/dashboard.service";
import { httpResource } from "@angular/common/http";

export const DashboardStore = signalStore(
    { providedIn: "root" },
    withState({
        filter: {
            from: OneWeekAgo,
            to: Today
        }
    }),
    withProps((store) => {
        return {
            visitStore: httpResource<any>({ url: `https://loca-dashboard-back.onrender.com/visits`})
        }
    }),
    withProps((store) => ({
        visitResource: store.visitStore.asReadonly()
    })),
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