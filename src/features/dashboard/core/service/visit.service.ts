import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs, query, where, Timestamp } from '@angular/fire/firestore';
import { Visit } from '../../model/dashboard.model';

@Injectable({
  providedIn:'root'
})
export class VisitDataService {

  readonly #firestore = inject(Firestore);

  ok = {
    averageDuration: 130,
    date: { seconds: 100000},
    id: 'dada',
    nbAppointmentsMade: Math.random() * 100,
    nbLeadConversion: 1,
    nbVisits: 10,
    nbVisitsWithFiber: 5
  }

  async getVisits({ from , to}: { from : Date, to: Date}) {

    return Promise.resolve([this.ok]);
    console.log('callled');
    return (
      await getDocs(query(collection(this.#firestore, 'visits'), where("date", ">", Timestamp.fromDate(from)), where("date", "<", Timestamp.fromDate(to))))
    ).docs.map((visits) => visits.data() as Visit);
  }

  
}
