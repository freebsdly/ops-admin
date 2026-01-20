import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-sider-header',
  imports: [],
  templateUrl: './sider-header.html',
  styleUrl: './sider-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderHeader {
  readonly isCollapsed = input.required<boolean>();
}
