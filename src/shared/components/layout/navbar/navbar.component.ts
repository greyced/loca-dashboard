import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DateRangePickerComponent } from '../../date-range-picker/date-range-picker.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, DateRangePickerComponent, ProfileMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
