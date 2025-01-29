import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuService } from '../../../../services/menu.service';
import { SubMenuItem } from '../../../../../models/menu.model';

@Component({
  selector: 'app-sidebar-submenu',
  imports: [NgClass,
    NgFor,
    NgTemplateOutlet,
    RouterLinkActive,
    RouterLink],
  templateUrl: './sidebar-submenu.component.html',
  styleUrl: './sidebar-submenu.component.scss'
})
export class SidebarSubmenuComponent {

  @Input() public submenu = <SubMenuItem>{};

  menuService = inject(MenuService);

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
