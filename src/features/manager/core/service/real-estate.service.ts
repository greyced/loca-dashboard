

import { httpResource, HttpResourceRef, HttpResourceRequest } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../../../../models/user';
import { RealEstate } from '../../../../models/real-estate.model';

@Injectable({
  providedIn: 'root'
})
export class RealEstateDataService {

  private readonly baseUrl = 'https://loca-dashboard-back.onrender.com';

  user = signal<User | null>(null);
  newRealEstate = signal<Partial<RealEstate | null>>(null);
  realEstateToRemoveId = signal<string | null>(null);

  realEstateResource: HttpResourceRef<RealEstate[] | undefined> = httpResource<RealEstate[]>(() => {
    return {
      method: 'GET',
      url: `${this.baseUrl}/real-estate`,
    }
  }, {
    defaultValue: []
  });


  newRealEstateResource: HttpResourceRef<RealEstate | undefined> = httpResource(() => {
    return {
      url: `${this.baseUrl}/real-estate`,
      method: 'POST',
      body: this.newRealEstate(),
      headers: {
        'Content-type': 'application/json'
      }
    }
  });

  deleteRealEstateResource = httpResource(() => {
    return {
      url: `${this.baseUrl}/real-estate/${this.realEstateToRemoveId()}`,
      method: 'DELETE'
    }
  });

}
