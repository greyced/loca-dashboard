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

export function computeChartData(visits: Visit[]): ApexAxisChartSeries {
    return [{
        name: 'coucou',
        data: visits.map((v) => [v.date.seconds * 1000, v.nbVisits])
    }]
}

export function computeTiles(nbAppointmentMade: number, nbVisits: number, averageDuration: number, nbVisitsWithFiber: number) {
    return [
        { text: `${nbAppointmentMade} Appointments made`, cols: 3, rows: 1, color: 'lightblue' },
        { text: `${nbVisits} Visits`, cols: 1, rows: 2, color: 'lightgreen' },
        { text: `${averageDuration} secondes average`, cols: 1, rows: 1, color: 'lightpink' },
        { text: `${nbVisitsWithFiber} Visits with fiber`, cols: 2, rows: 1, color: '#DDBDF1' }
    ];
}