import { Component, input, output, signal, ElementRef, viewChild, inject, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../sider-menu';

@Component({
  selector: 'app-sider-menu-item',
  imports: [RouterLink, RouterLinkActive, SiderMenuItem],
  templateUrl: './sider-menu-item.html',
  styleUrl: './sider-menu-item.css',
})
export class SiderMenuItem implements AfterViewInit {
  readonly elementRef = inject(ElementRef);
  readonly menuLink = viewChild<ElementRef<HTMLDivElement>>('menuLink');

  readonly item = input.required<MenuItem>();
  readonly level = input(1);
  readonly maxLevel = input(3);
  readonly expandedKeys = input.required<Set<string>>();
  readonly isCollapsed = input.required<boolean>();
  readonly toggleExpand = output<string>();
  readonly menuSelect = output<MenuItem>();

  readonly showPopup = signal(false);
  readonly popupPosition = signal({ top: 0, left: 0 });

  ngAfterViewInit(): void {
    this.updatePopupPosition();
  }

  updatePopupPosition(): void {
    const linkElement = this.menuLink()?.nativeElement;
    if (linkElement) {
      const rect = linkElement.getBoundingClientRect();
      this.popupPosition.set({
        top: rect.top,
        left: rect.right,
      });
    }
  }

  hasChildren(): boolean {
    return Boolean(this.item().children && this.item().children!.length > 0);
  }

  isExpanded(): boolean {
    return this.expandedKeys().has(this.item().path || this.item().label);
  }

  onClickExpand(event: MouseEvent): void {
    if (!this.isCollapsed()) {
      event.preventDefault();
      event.stopPropagation();
      this.toggleExpand.emit(this.item().path || this.item().label);
    }
  }

  onMouseEnter(): void {
    if (this.isCollapsed() && this.hasChildren()) {
      this.updatePopupPosition();
      this.showPopup.set(true);
    }
  }

  onMouseLeave(): void {
    this.showPopup.set(false);
  }

  onClickMenuItem(event: MouseEvent): void {
    if (!this.hasChildren() && this.item().path) {
      this.menuSelect.emit(this.item());
    }
  }

  onPopupItemClick(childItem: MenuItem, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (childItem.path) {
      this.showPopup.set(false);
      this.menuSelect.emit(childItem);
    }
  }
}
