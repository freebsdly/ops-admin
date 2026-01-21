import { Component, ViewEncapsulation, input } from '@angular/core';
import { SiderMenu, MenuItem } from '../../sider-menu/sider-menu';

@Component({
  selector: 'app-sider-content',
  imports: [SiderMenu],
  templateUrl: './sider-content.html',
  styleUrl: './sider-content.css',
  encapsulation: ViewEncapsulation.None,
})
export class SiderContent {
  readonly menuItems = input.required<MenuItem[]>();
}
