import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-collapse-button',
  imports: [],
  templateUrl: './collapse-button.html',
  styleUrl: './collapse-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapseButton {
  readonly toggle = output<void>();
}
