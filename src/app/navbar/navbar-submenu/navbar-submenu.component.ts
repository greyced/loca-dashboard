import { Component, Input } from '@angular/core';
import { SubMenuItem } from '../../../models/menu.model';
import { NgFor, NgTemplateOutlet, NgIf } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';

@Component({
  selector: 'div[navbar-submenu]',
  imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf],
  templateUrl: './navbar-submenu.component.html',
  styleUrl: './navbar-submenu.component.scss'
})
export class NavbarSubmenuComponent {
  @Input() submenu = <SubMenuItem[]>{};
}
