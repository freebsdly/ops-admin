import { Component, signal, computed } from '@angular/core';
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
  readonly modules = [
    '模块 1',
    '模块 2',
    '模块 3',
    '模块 4',
    '模块 5',
    '模块 6'
  ];

  readonly selectedModule = signal(this.modules[0]);
  readonly selectedModuleText = computed(() => this.selectedModule());

  selectModule(module: string): void {
    this.selectedModule.set(module);
  }
}
