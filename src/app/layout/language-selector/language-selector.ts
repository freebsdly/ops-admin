import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerLanguage } from '@ng-icons/tabler-icons';

interface Language {
  emoji: string;
  name: string;
  code: string;
}

@Component({
  selector: 'app-language-selector',
  imports: [NgIcon],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.css',
  viewProviders: [provideIcons({ tablerLanguage })]
})
export class LanguageSelector {
  readonly languages: Language[] = [
    { emoji: '🇨🇳', name: '中文', code: 'zh-CN' },
    { emoji: '🇺🇸', name: 'English', code: 'en-US' }
  ];

  readonly selectedLanguage = signal(this.languages[0]);

  selectLanguage(language: Language): void {
    this.selectedLanguage.set(language);
  }
}
