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
      label: 'Users',
      icon: '👥',
      path: '/users',
      badge: 5,
    },
    {
      label: 'Settings',
      icon: '⚙️',
      path: '/settings',
    },
  ];

  toggleCollapsed(): void {
    this.collapsed.update((value) => !value);
  }
}
