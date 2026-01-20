import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sider } from './sider/sider';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Header, Sider, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
