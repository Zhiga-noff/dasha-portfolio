import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'z-scroll-up-btn',
  templateUrl: './scroll-up-btn.component.html',
  styleUrl: './scroll-up-btn.component.scss',
})
export class ScrollUpBtnComponent implements AfterViewInit {
  visibleBtn: boolean = false;

  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1000) {
        this.visibleBtn = true;
      } else {
        this.visibleBtn = false;
      }
    });
  }

  scrollToTop() {
    const container = document.querySelector('#top');
    container.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
