import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuService } from '../core/services/menu.service';
import { DateRangeService } from '../features/dashboard/core/service/date-range.service';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, FooterComponent],
  providers: [MenuService, DateRangeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
