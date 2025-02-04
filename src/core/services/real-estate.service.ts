import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { REAL_ESTATES } from '../const/real-estate.const';
import { RealEstate } from '../../models/real-estate.model';
import { Firestore, addDoc, collection, getDocs, query } from 'firebase/firestore';

@Injectable()
export class RealEstateDataService {

  firestore = inject(Firestore);

  constructor() { }

  async createRealEstate(realEstate: RealEstate) {
    const docRef = await addDoc(collection(this.firestore, 'real-estate'), realEstate);
    console.log("Document written with ID: ", docRef.id);
  }

  async getRealEstates() {
    return (
     await getDocs(query(collection(this.firestore, 'real-estate')))
    ).docs.map((robots) => robots.data());
   }

  getRealEstateList(): Observable<RealEstate[]> {
    return of(REAL_ESTATES)
  }
}
