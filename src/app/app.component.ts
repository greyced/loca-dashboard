import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../shared/components/layout/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/components/layout/navbar/navbar.component';
import { FooterComponent } from '../shared/components/layout/footer/footer.component';
import { MenuService } from '../shared/services/menu.service';
import { DateRangeService } from '../features/dashboard/core/service/date-range.service';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { RealEstate } from '../features/manager/models/real-estate.model';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, FooterComponent],
  providers: [MenuService, DateRangeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
