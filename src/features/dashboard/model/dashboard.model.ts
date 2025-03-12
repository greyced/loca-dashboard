import { RealEstate } from "../../../models/real-estate.model";
import { User } from "../../../models/user";

export interface Visit {
    id: string;
    date: { seconds: number };
    nbVisits: number;
    nbVisitsWithFiber: number;
    nbAppointmentsMade: number;
    nbLeadConversion: number;
    averageDuration: number;
}

export interface DetailedVisit {
    id: string;
    date: { seconds: number };
    duration: number;
    user: User;
    realEstate: RealEstate;
}