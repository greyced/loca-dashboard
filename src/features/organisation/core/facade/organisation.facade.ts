import { inject, Injectable, Signal } from "@angular/core";
import { Organisation } from "../../models/organisation.model";
import { OrganisationStore } from "../store/organisation.store";

@Injectable()
export class OrganisationFacade {

    private readonly store = inject(OrganisationStore);

    organisations: Signal<Organisation[]> = this.store.organisations;

}