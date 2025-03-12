import { computed } from "@angular/core";
import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { User } from "../../models/user";

export const initialState: { user: User | null } = {
    user: null
}

export const UserStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ user }) => ({
        userLogged: computed(() => user() !== null),
        userName:  computed(() => user()?.name),
        userMail: computed(() => user()?.mail),
        userCapabilities: computed(() => user()?.capabilities),
        userOrganisations: computed(() => user()?.organisations)
    })),
    withMethods((state) => {
        return {
            logOn: (user: User) => {
                patchState(state, { user })
            },
            logOff: () => {
                patchState(state, { user: null })
            }
        }
    })
);
