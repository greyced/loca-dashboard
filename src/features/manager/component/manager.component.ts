import { Component } from '@angular/core';
import { ManagerCardsContainerComponent } from './manager-cards-container/manager-cards-container.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-manager',
  imports: [ManagerCardsContainerComponent, MatIcon],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss'
})
export class ManagerComponent {

}
