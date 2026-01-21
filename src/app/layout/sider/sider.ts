import { Component, input } from '@angular/core';
import { SiderHeader } from './sider-header/sider-header';
import { SiderContent } from './sider-content/sider-content';
import { SiderFooter } from './sider-footer/sider-footer';
import { MenuItem } from '../sider-menu/sider-menu';

@Component({
  selector: 'app-sider',
  imports: [SiderHeader, SiderContent, SiderFooter],
  templateUrl: './sider.html',
  styleUrl: './sider.css',
})
export class Sider {
  readonly isCollapsed = input.required<boolean>();
  readonly menuItems = input<MenuItem[]>([]);
}
