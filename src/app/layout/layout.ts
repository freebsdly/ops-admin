import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Sider } from './sider/sider';
import { Footer } from './footer/footer';
import { CollapseButton } from './collapse-button/collapse-button';

@Component({
  selector: 'app-layout',
  imports: [Header, Sider, Footer, CollapseButton],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  readonly collapsed = signal(false);

  toggleCollapsed(): void {
    this.collapsed.update((value) => !value);
  }
}
