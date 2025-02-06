import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RealEstateCard } from '../../../models/real-estate-card.model';
import { NgIf } from '@angular/common';
import { RealEstate } from '../../../models/real-estate.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-manager-card',
  imports: [NgIf, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions, MatButtonModule],
  templateUrl: './manager-card.component.html',
  styleUrl: './manager-card.component.scss'
})
export class ManagerCardComponent {
  @Input({ required: true }) card!: RealEstate

  @Output() update = new EventEmitter<RealEstate>()

  onEdit(card: RealEstate){
    this.update.emit(card)
  }
}
