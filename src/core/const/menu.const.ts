import { MenuItem } from "../../models/menu.model";

export class Menu {
    public static pages: MenuItem[] = [
      {
        group: 'Loca Overview',
        separator: true,
        items: [
          {
            icon: 'home',
            label: 'Home',
            route: '/home',
          },
          {
            icon: 'dashboard',
            label: 'Dashboard',
            route: '/dashboard',
          },
          {
            icon: 'preview',
            label: 'Manager',
            route: '/manager',
          },
          {
            icon: 'group',
            label: 'Users',
            route: '/users',
          },
        ],
      },
      {
        group: 'Config',
        separator: false,
        items: [
          {
            icon: 'settings',
            label: 'Settings',
            route: '/settings',
          },
          {
            icon: 'notifications',
            label: 'Notifications',
            route: '/gift',
          },
          {
            icon: 'bookmark_manager',
            label: 'Folders',
            route: '/folders',
            children: [
              { label: 'Current Files', route: '/folders/current-files' },
              { label: 'Downloads', route: '/folders/download' },
              { label: 'Trash', route: '/folders/trash' },
            ],
          },
        ],
      },
    ];
  }