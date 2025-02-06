import { Visit } from "../../model/dashboard.model";

export function computeAverageTime(visits: Visit[]): number {
    return visits.map(c => c.averageDuration % 60)
        .reduce((a, b) => a + b, 0) / visits.length;
}

export function computeNbVisites(visits: Visit[]): number {
    return visits.map(c => c.nbVisits)
        .reduce((a, b) => a + b, 0);
}

export function computeNbAppointment(visits: Visit[]): number {
    return visits.map(c => c.nbAppointmentsMade)
        .reduce((a, b) => a + b, 0);
}

export function computeNbVisitsWithFiber(visits: Visit[]): number {
    return visits.map(c => c.nbVisitsWithFiber)
        .reduce((a, b) => a + b, 0);
}