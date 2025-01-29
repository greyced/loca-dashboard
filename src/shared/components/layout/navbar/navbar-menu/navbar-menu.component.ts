import { NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarSubmenuComponent } from '../navbar-submenu/navbar-submenu.component';
import { MenuService } from '../../../../services/menu.service';

@Component({
  selector: 'app-navbar-menu',
  imports: [NgFor, NgClass, NavbarSubmenuComponent],
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.scss'
})
export class NavbarMenuComponent {
  menuService = inject(MenuService);
}
