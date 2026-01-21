import { Component } from '@angular/core';
import { ModuleSelector } from '@/app/layout/module-selector/module-selector';
import { LanguageSelector } from '@/app/layout/language-selector/language-selector';
import { UserInfo } from '@/app/layout/user-info/user-info';

@Component({
  selector: 'app-header',
  imports: [ModuleSelector, LanguageSelector, UserInfo],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
