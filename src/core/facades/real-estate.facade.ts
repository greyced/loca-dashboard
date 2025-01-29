import { inject, Injectable, Signal } from "@angular/core";
import { RealEstateStore } from "../store/real-estate/real-estate.store";

@Injectable()
export class RealEstateFacade {

    #store = inject(RealEstateStore);

    realEstates = this.#store.realEstateList;

}