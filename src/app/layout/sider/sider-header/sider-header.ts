import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Logo } from '../../logo/logo';

@Component({
  selector: 'app-sider-header',
  imports: [Logo],
  templateUrl: './sider-header.html',
  styleUrl: './sider-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderHeader {
  readonly isCollapsed = input.required<boolean>();
}
