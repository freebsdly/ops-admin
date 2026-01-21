import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SiderMenuItem } from './sider-menu-item/sider-menu-item';

export interface MenuItem {
  label: string;
  icon?: string;
  path?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-sider-menu',
  imports: [SiderMenuItem],
  templateUrl: './sider-menu.html',
  styleUrl: './sider-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-sider-menu',
  },
})
export class SiderMenu {
  readonly menuItems = input.required<MenuItem[]>();
  readonly menuSelect = output<MenuItem>();
  readonly maxLevel = input(3);
  readonly isCollapsed = input.required<boolean>();

  readonly expandedKeys = signal<Set<string>>(new Set<string>());

  toggleExpand(key: string): void {
    this.expandedKeys.update((keys) => {
      const newKeys = new Set(keys);
      if (newKeys.has(key)) {
        newKeys.delete(key);
      } else {
        newKeys.add(key);
      }
      return newKeys;
    });
  }

  isExpanded(key: string): boolean {
    return this.expandedKeys().has(key);
  }
}
