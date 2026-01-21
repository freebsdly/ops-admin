import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerLayoutGrid, tablerChevronDown } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-module-selector',
  imports: [NgIcon],
  templateUrl: './module-selector.html',
  styleUrl: './module-selector.css',
  viewProviders: [provideIcons({ tablerLayoutGrid, tablerChevronDown })]
})
export class ModuleSelector {

}
