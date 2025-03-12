import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RealEstate } from '../../../../../models/real-estate.model';

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
