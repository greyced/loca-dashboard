import { Component, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RealEstateCard } from '../../../models/real-estate-card.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-manager-card',
  imports: [NgIf, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions],
  templateUrl: './manager-card.component.html',
  styleUrl: './manager-card.component.scss'
})
export class ManagerCardComponent {
  @Input({ required: true }) card!: RealEstateCard
}
