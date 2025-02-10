export interface Visit {
    id: string;
    date: { seconds: number };
    nbVisits: number;
    nbVisitsWithFiber: number;
    nbAppointmentsMade: number;
    nbLeadConversion: number;
    averageDuration: number;
}