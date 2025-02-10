
import { inject, resource } from '@angular/core';
import { signalStore, withMethods, withProps } from '@ngrx/signals';
import { RealEstate } from '../../../models/real-estate.model';
import { RealEstateDataService } from '../../service/real-estate-data.service';

export const RealEstateStore = signalStore(
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
        updateRealEstate: (realEstate: RealEstate) => {
            store._realEstateService.updateRealEstate(realEstate)
            store._realEstateStore.reload()
        } ,
    })),

);