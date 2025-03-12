import { httpResource } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Organisation } from "../../models/organisation.model";

@Injectable()
export class OrganisationService {

    private baseUrl = 'https://loca-dashboard-back.onrender.com';

    readonly organisationResource = httpResource<Organisation[]>(() =>`${this.baseUrl}/organisation`)
}