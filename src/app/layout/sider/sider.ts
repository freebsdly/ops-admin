import { Component } from '@angular/core';
import { SiderHeader } from './sider-header/sider-header';
import { SiderContent } from './sider-content/sider-content';
import { SiderFooter } from './sider-footer/sider-footer';

@Component({
  selector: 'app-sider',
  imports: [SiderHeader, SiderContent, SiderFooter],
  templateUrl: './sider.html',
  styleUrl: './sider.css',
})
export class Sider {}
