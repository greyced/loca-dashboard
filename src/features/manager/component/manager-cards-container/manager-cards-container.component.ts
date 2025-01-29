import { Component, computed, inject } from '@angular/core';
import { RealEstateFacade } from '../../../../core/facades/real-estate.facade';
import { NgFor, NgForOf } from '@angular/common';
import { RealEstate } from '../../../../models/real-estate.model';
import { RealEstateStore } from '../../../../core/store/real-estate/real-estate.store';
import { ManagerComponent } from '../manager.component';
import { ManagerCardComponent } from './manager-card/manager-card.component';
import { RealEstateCard } from '../../models/real-estate-card.model';

@Component({
  selector: 'app-manager-cards-container',
  imports: [NgFor, NgForOf, ManagerCardComponent],
  providers: [RealEstateFacade, RealEstateStore],
  templateUrl: './manager-cards-container.component.html',
  styleUrl: './manager-cards-container.component.scss'
})
export class ManagerCardsContainerComponent {
  #realEstateFacade = inject(RealEstateFacade);

  realEstatesCards = computed(() => {
    const realEstates = this.#realEstateFacade.realEstates();
    return realEstates.map(c => this.#mapRealEstateToCard(c))
  })

  #mapRealEstateToCard(realEstate: RealEstate): RealEstateCard {
    return {
      title: realEstate.title,
      description: realEstate.description,
      actions: []
    }
  }

  trackByFn(item: any) {
    return item.id;
  }
}
