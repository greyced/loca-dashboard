import { Component, inject } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
import { NgClass, NgIf } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass, NgIf, SidebarMenuComponent, MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  readonly menuService = inject(MenuService);

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
