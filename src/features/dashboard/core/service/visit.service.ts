import { inject, Injectable } from '@angular/core';
import { collection, Firestore, getDocs, query, where, Timestamp } from '@angular/fire/firestore';
import { Visit } from '../../model/dashboard.model';

@Injectable({
  providedIn:'root'
})
export class VisitDataService {

  readonly #firestore = inject(Firestore);

  async getVisits({ from , to}: { from : Date, to: Date}) {
    return (
      await getDocs(query(collection(this.#firestore, 'visits'), where("date", ">", Timestamp.fromDate(from)), where("date", "<", Timestamp.fromDate(to))))
    ).docs.map((visits) => visits.data() as Visit);
  }
}
