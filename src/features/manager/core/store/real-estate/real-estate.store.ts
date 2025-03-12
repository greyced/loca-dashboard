
import { inject } from '@angular/core';
import { signalStore, withMethods, withProps } from '@ngrx/signals';
import { RealEstate } from '../../../models/real-estate.model';
import { RealEstateDataService } from '../../service/real-estate.service';

export const RealEstateStore = signalStore(
    withProps(() => ({
        _realEstateService: inject(RealEstateDataService),
    })),
    withProps((store) => ({
        _realEstateStore: store._realEstateService.realEstateResource
    })),
    withMethods((store) => ({
        getRealEstate: () => store._realEstateStore.value.asReadonly(),
        createRealEstate: (realEstate: RealEstate) => { 
            store._realEstateService.newRealEstate.set(realEstate);
        },
        updateRealEstate: (realEstate: RealEstate) => {
            store._realEstateStore.reload()
        } ,
    })),

);