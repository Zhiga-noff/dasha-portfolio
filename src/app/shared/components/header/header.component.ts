import { Component, OnInit } from '@angular/core';
import { menu } from '../../../../libs/constant/memu.constant';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'z-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  readonly menu = menu;
  protected activeRoute: string;
  protected activeDrop: boolean = false;

  private routeSubscription: Subscription;

  constructor(protected router: Router) {}

  ngOnInit() {
    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        if (currentRoute === '/') {
          this.activeRoute = 'Проекты';
        }

        this.menu.forEach((item) => {
          if (item.link === currentRoute) {
            this.activeRoute = item.name;
          }
        });
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  setActiveRoute(nameRoute: string) {
    this.activeRoute = nameRoute;
    this.activeDrop = false;
    this.activeDrop = !this.activeDrop;
  }

  callDropMenu() {
    this.activeDrop = !this.activeDrop;
  }
}
