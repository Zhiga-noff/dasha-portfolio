import { AfterViewInit, Component } from '@angular/core';
import { PopupService } from './popup.service';
import { AnimateService } from './animate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(
    protected popup: PopupService,
    protected anim: AnimateService,
  ) {}

  ngAfterViewInit() {
    window.addEventListener('scroll', this.anim.animOnScroll);
  }
}
