import { JsonPipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { OrganisationFacade } from '../../core/facade/organisation.facade';
import { OrganisationStore } from '../../core/store/organisation.store';
import { Organisation } from '../../models/organisation.model';


@Component({
  selector: 'app-organisation-container',
  imports: [JsonPipe, MatTableModule],
  templateUrl: './organisation-container.component.html',
  styleUrl: './organisation-container.component.scss',
  providers: [OrganisationFacade, OrganisationStore]
})
export class OrganisationContainerComponent {

  private readonly organisationFacade = inject(OrganisationFacade);

  organisations: Signal<Organisation[]> = this.organisationFacade.organisations;

  displayedColumns: string[] = ['name','mainMember', 'phone', 'nbRealEstates',  'actions'];

}
