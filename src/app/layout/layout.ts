import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Sider } from './sider/sider';
import { Footer } from './footer/footer';
import { CollapseButton } from './collapse-button/collapse-button';
import { MenuItem } from './sider-menu/sider-menu';

@Component({
  selector: 'app-layout',
  imports: [Header, Sider, Footer, CollapseButton],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  readonly collapsed = signal(false);
  readonly menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: '📊',
      path: '/dashboard',
    },
    {
      label: 'User Management',
      icon: '👥',
      children: [
        {
          label: 'All Users',
          path: '/users/all',
          badge: 5,
        },
        {
          label: 'Groups',
          path: '/users/groups',
          children: [
            {
              label: 'Admin Group',
              path: '/users/groups/admin',
            },
            {
              label: 'User Group',
              path: '/users/groups/user',
            },
            {
              label: 'Guest Group',
              path: '/users/groups/guest',
            },
          ],
        },
        {
          label: 'Permissions',
          path: '/users/permissions',
        },
      ],
    },
    {
      label: 'System',
      icon: '⚙️',
      children: [
        {
          label: 'Settings',
          path: '/system/settings',
        },
        {
          label: 'Logs',
          path: '/system/logs',
        },
      ],
    },
  ];

  toggleCollapsed(): void {
    this.collapsed.update((value) => !value);
  }
}
