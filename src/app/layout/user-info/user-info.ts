import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerUser, tablerChevronDown, tablerSettings, tablerLogout, tablerMail } from '@ng-icons/tabler-icons';

interface User {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-user-info',
  imports: [NgIcon],
  templateUrl: './user-info.html',
  styleUrl: './user-info.css',
  viewProviders: [provideIcons({ tablerUser, tablerChevronDown, tablerSettings, tablerLogout, tablerMail })]
})
export class UserInfo {
  readonly user = signal<User>({
    name: '管理员',
    email: 'admin@example.com',
    role: '超级管理员',
    avatar: ''
  });

  logout(): void {
    console.log('User logout');
  }

  openSettings(): void {
    console.log('Open settings');
  }
}
