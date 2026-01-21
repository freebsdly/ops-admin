import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface MenuItem {
  label: string;
  icon?: string;
  path: string;
  badge?: number;
}

@Component({
  selector: 'app-sider-menu',
  imports: [RouterLink, RouterLinkActive],
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
}
