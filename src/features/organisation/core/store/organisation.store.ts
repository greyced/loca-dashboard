import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { Organisation } from "../../models/organisation.model";
import { httpResource } from "@angular/common/http";

export const initialState: { organisations: Organisation[] } = {
    organisations: []
}

export const OrganisationStore = signalStore(
    withState(initialState),
    withProps(()=> {
        return {
            organisationResource: httpResource<Organisation[]>(() =>`https://loca-dashboard-back.onrender.com/organisation`)
        }
    }),
    withComputed(({ organisationResource }) => ({
        organisations: computed(() => organisationResource.value())
    })),
    withMethods((state) => {
        return {
            update: (organisations: Organisation[]) => {
                patchState(state, { organisations })
            }
        }
    })
);
