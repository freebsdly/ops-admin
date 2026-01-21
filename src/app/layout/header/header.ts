import { Component } from '@angular/core';
import { ModuleSelector } from '@/app/layout/module-selector/module-selector';
import { LanguageSelector } from '@/app/layout/language-selector/language-selector';

@Component({
  selector: 'app-header',
  imports: [ModuleSelector, LanguageSelector],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
