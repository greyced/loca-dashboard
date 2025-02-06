import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { OneWeekAgo, Today } from '../../const/time.const';
import { computed } from '@angular/core';


const initialState: { from: Date, to: Date } = {
    from: OneWeekAgo,
    to: Today
}

export const TimeStore = signalStore(
    withState(initialState),
    withComputed((state) => ({
        fullDate: computed(() => `${state.from.toLocaleString()} to ${state.to.toLocaleString()}`)
    })),
    withMethods((store) => ({
        update(from: Date, to: Date) {
            patchState(store, { from, to })
        }
    }))
);
