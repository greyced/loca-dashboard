import { JsonPipe, NgFor, NgForOf } from '@angular/common';
import { Component, computed, inject, OnInit, resource, signal } from '@angular/core';
import { collection, doc, DocumentData, Firestore, getDocs, query } from 'firebase/firestore';
import { RealEstateDataService } from '../../core/service/real-estate-data.service';
import { RealEstateCard } from '../../models/real-estate-card.model';
import { ManagerCardComponent } from './manager-card/manager-card.component';
import { FirestoreModule, provideFirestore } from '@angular/fire/firestore';
import { RealEstate } from '../../../../models/real-estate.model';

@Component({
  selector: 'app-manager-cards-container',
  imports: [NgFor, NgForOf, ManagerCardComponent, JsonPipe, FirestoreModule],
  providers: [RealEstateDataService],
  templateUrl: './manager-cards-container.component.html',
  styleUrl: './manager-cards-container.component.scss'
})
export class ManagerCardsContainerComponent {
  #realEstateService = inject(RealEstateDataService);

  originalName = signal('');
  englishName = signal('');

  dessertsCriteria = computed(() => ({
    originalName: this.originalName(),
    englishName: this.englishName(),
  }));

  dessertsResource = resource({
    request: this.dessertsCriteria,
    loader: (param) => {
      return this.#realEstateService.getRealEstates();
    }
  });

  realEstatesCards = computed(() => this.dessertsResource.value()?.map((c) => this.#mapRealEstateToCard(c)) ?? []);

  #mapRealEstateToCard(document: RealEstate): RealEstateCard {
    console.log('coucou', document)
    return {
      title: document.title,
      description: document.description,
      actions: []
    }
  }

  trackByFn(item: any) {
    return item.id;
  }
}
