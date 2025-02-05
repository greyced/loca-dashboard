
import { inject, resource } from '@angular/core';
import { signalStore, withMethods, withProps, withState } from '@ngrx/signals';
import { RealEstateDataService } from '../../services/real-estate-data.service';
import { RealEstate } from '../../../models/real-estate.model';
import { REAL_ESTATES } from '../../const/real-estate.const';

const initialState: { realEstateList: RealEstate[] } = {
    realEstateList: REAL_ESTATES,
}

export const RealEstateStore = signalStore(
    withState(initialState),
    withProps(() => ({
        _realEstateService: inject(RealEstateDataService),
    })),
    withProps((store) => ({
        _realEstateStore: resource({
            loader: (param) => {
                console.log('param', param);
                return store._realEstateService.getRealEstates();
            }
        })
    })),
    withMethods((store) => ({
        getRealEstate: () => store._realEstateStore.value.asReadonly(),
        createRealEstate: (realEstate: RealEstate) => store._realEstateService.createRealEstate(realEstate),
    })),

);