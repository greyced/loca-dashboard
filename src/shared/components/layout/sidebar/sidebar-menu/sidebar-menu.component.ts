import { Component, inject } from '@angular/core';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { SubMenuItem } from '../../../../../models/menu.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar-menu',
  imports: [NgIf, NgClass,
    NgFor,
    RouterLinkActive,
    RouterLink, SidebarSubmenuComponent, NgTemplateOutlet, MatIcon],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {

  menuService = inject(MenuService);

  toggleMenu(menu: SubMenuItem): void {
    this.menuService.toggleMenu(menu)
  }
}
