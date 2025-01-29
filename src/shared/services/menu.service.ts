import { Injectable, signal } from '@angular/core';
import { MenuItem, SubMenuItem } from '../../models/menu.model';
import { Menu } from '../../core/const/menu.const';

@Injectable()
export class MenuService {

  #showSidebar = signal(true);

  sidebarOpened = this.#showSidebar.asReadonly();

  #pagesMenu = signal<MenuItem[]>(Menu.pages);

  pagesMenu = this.#pagesMenu.asReadonly();

  toggleSidebar() {
    this.#showSidebar.set(!this.#showSidebar);
  }

  toggleMenu(menu: any) {
    this.#showSidebar.set(true);
    menu.expanded = !menu.expanded;
  }

  toggleSubMenu(menu: SubMenuItem) {
    console.log('menu toggled', menu);
  }
}
