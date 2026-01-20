import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerArrowNarrowLeftDashed, tablerArrowNarrowRightDashed } from '@ng-icons/tabler-icons';


@Component({
  selector: 'app-collapse-button',
  imports: [NgIcon],
  templateUrl: './collapse-button.html',
  styleUrl: './collapse-button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ tablerArrowNarrowLeftDashed, tablerArrowNarrowRightDashed })]
})
export class CollapseButton {
  readonly isCollapsed = input.required<boolean>();
  readonly toggle = output<void>();
}
