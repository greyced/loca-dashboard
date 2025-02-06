import { inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query } from '@angular/fire/firestore';
import { updateDoc, where } from 'firebase/firestore';
import { RealEstate } from '../../models/real-estate.model';

@Injectable()
export class RealEstateDataService {

  readonly #firestore = inject(Firestore);

  async createRealEstate(realEstate: RealEstate) {
    const docRef = await addDoc(collection(this.#firestore, 'real-estate'), realEstate);
    console.log("Document written with ID: ", docRef.id);
  }

  async updateRealEstate(realEstate: RealEstate) {
    const docRefs = await getDocs(query(collection(this.#firestore,  'real-estate'), where("id", "==", realEstate.id)));
    await updateDoc(docRefs.docs[0].ref, {
      ...realEstate
    });
  }

  async getRealEstates() {
    return (
      await getDocs(query(collection(this.#firestore, 'real-estate')))
    ).docs.map((robots) => robots.data() as RealEstate);
  }
}
