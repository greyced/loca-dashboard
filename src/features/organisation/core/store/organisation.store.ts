import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Organisation } from "../../models/organisation.model";

export const initialState: { organisations: Organisation[] } = {
    organisations: []
}

export const OrganisationStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ organisations }) => ({
        nbOrganisation: computed(() => organisations.length),
    })),
    withMethods((state) => {
        return {
            update: (organisations: Organisation[]) => {
                patchState(state, { organisations })
            }
        }
    })
);
