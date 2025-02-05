import { NgFor, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog
} from '@angular/material/dialog';
import { RealEstateDataService } from '../../../../core/services/real-estate-data.service';
import { RealEstateStore } from '../../../../core/store/real-estate/real-estate.store';
import { RealEstate } from '../../../../models/real-estate.model';
import { ManagerCardComponent } from './manager-card/manager-card.component';
import { ManagerDialogCardComponent } from './manager-dialog-card/manager-dialog-card.component';


@Component({
  selector: 'app-manager-cards-container',
  imports: [NgFor, NgForOf, ManagerCardComponent, MatButtonModule],
  providers: [RealEstateDataService, RealEstateStore],
  templateUrl: './manager-cards-container.component.html',
  styleUrl: './manager-cards-container.component.scss'
})
export class ManagerCardsContainerComponent {
  readonly #store = inject(RealEstateStore);

  readonly #dialog = inject(MatDialog);

  realEstatesCards = this.#store.getRealEstate();

  onUpdate(data: RealEstate) {
    this.#dialog.open(ManagerDialogCardComponent, {data }).afterClosed().subscribe((res) => {
      console.log('updated', res);
    });
  }

  addCard() {
    this.#dialog.open(ManagerDialogCardComponent).afterClosed().subscribe((res) => {

      const realEstate: RealEstate = {
        id: crypto.randomUUID(),
        description: res.description(),
        title: res.title(),
        livingArea: 0,
        numberOfPieces: 2,
        price: 0,
        ownerId: 'azea',
        totalArea: 0
      }
      console.log('after', realEstate);

      this.#store.createRealEstate(realEstate);

    })
  }

  trackByFn(item: any) {
    return item.id;
  }
}
