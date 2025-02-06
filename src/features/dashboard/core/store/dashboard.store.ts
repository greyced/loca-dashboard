import { computed, inject, resource } from "@angular/core";
import { signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { Visit } from "../../model/dashboard.model";
import { VisitDataService } from "../service/visit.service";
import { DateRangeService } from "../service/date-range.service";
import { computeAverageTime, computeNbAppointment, computeNbVisites, computeNbVisitsWithFiber } from "../utils/dashboard.utils";
const initialState: { visits: Visit[] } = {
    visits: [],
}

export const DashboardStore = signalStore(
    withState(initialState),
    withProps(() => ({
        _visitService: inject(VisitDataService),
        _timeService: inject(DateRangeService)
    })),
    withProps((store) => ({
        _visitStore: resource({
            request: computed(() => ({
                from: store._timeService.from(),
                to: store._timeService.to(),    
            })),
            loader: (param) => {
                console.log('param visit', param);
                return store._visitService.getVisits(param.request);
            }
        })
    })),
    withComputed((store) => ({
        nbVisits: computed(() => computeNbVisites(store._visitStore.value() || [])),
        averageDuration: computed(() => computeAverageTime(store._visitStore.value() || [])),
        nbAppointmentMade: computed(() => computeNbAppointment(store._visitStore.value() || [])),
        nbVisitsWithFiber: computed(() => computeNbVisitsWithFiber(store._visitStore.value() || [])),
    })),
    withMethods((store) => ({
        getVisits: () => store._visitStore.value.asReadonly(),
        updateDateRange: ({ from, to }: { from: Date, to: Date }) => store._timeService.updateRange(from, to)
    })),
);