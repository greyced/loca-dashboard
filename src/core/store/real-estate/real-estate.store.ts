
import { signalStore, withState } from '@ngrx/signals';
import { RealEstate } from '../../../models/real-estate.model';
import { REAL_ESTATES } from '../../const/real-estate.const';

const initialState : { realEstateList: RealEstate[]} = {
    realEstateList: REAL_ESTATES
}

export const RealEstateStore = signalStore(
    withState(initialState)
);