import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { REAL_ESTATES } from '../const/real-estate.const';
import { RealEstate } from '../../models/real-estate.model';

@Injectable()
export class RealEstateDataService {

  getRealEstateList(): Observable<RealEstate[]> {
    return of(REAL_ESTATES)
  }
}
