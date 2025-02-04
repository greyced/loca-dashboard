import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';
import { RealEstate } from '../../../../models/real-estate.model';


@Injectable()
export class RealEstateDataService {

  constructor(private firestore: Firestore) { }

  async createRealEstate(realEstate: RealEstate) {
    const docRef = await addDoc(collection(this.firestore, 'real-estate'), realEstate);
    console.log("Document written with ID: ", docRef.id);
  }

  async getRealEstates() {
    return (
     await getDocs(query(collection(this.firestore, 'real-estate')))
    ).docs.map((robots) => robots.data() as RealEstate);
   }
}
