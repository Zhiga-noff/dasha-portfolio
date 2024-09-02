import { Component } from '@angular/core';
import { menu } from '../../../../libs/constant/memu.constant';

@Component({
  selector: 'z-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly menu = menu;
  protected activeRoute: string = 'Проекты';
  protected activeDrop: boolean = false;

  setActiveRoute(nameRoute: string) {
    this.activeRoute = nameRoute;
    this.activeDrop = false;
  }

  callDropMenu() {
    this.activeDrop = !this.activeDrop;
  }
}
