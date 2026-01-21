import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../sider-menu';

@Component({
  selector: 'app-sider-menu-item',
  imports: [RouterLink, RouterLinkActive, SiderMenuItem],
  templateUrl: './sider-menu-item.html',
  styleUrl: './sider-menu-item.css',
})
export class SiderMenuItem {
  readonly item = input.required<MenuItem>();
  readonly level = input(1);
  readonly maxLevel = input(3);
  readonly expandedKeys = input.required<Set<string>>();
  readonly isCollapsed = input.required<boolean>();
  readonly toggleExpand = output<string>();
  readonly menuSelect = output<MenuItem>();

  hasChildren(): boolean {
    return Boolean(this.item().children && this.item().children!.length > 0);
  }

  isExpanded(): boolean {
    return this.expandedKeys().has(this.item().path || this.item().label);
  }

  onClickExpand(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.toggleExpand.emit(this.item().path || this.item().label);
  }

  onClickMenuItem(event: MouseEvent): void {
    if (!this.hasChildren() && this.item().path) {
      this.menuSelect.emit(this.item());
    }
  }
}
