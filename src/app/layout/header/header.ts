import { Component } from '@angular/core';
import { ModuleSelector } from '@/app/layout/module-selector/module-selector';

@Component({
  selector: 'app-header',
  imports: [ModuleSelector],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
