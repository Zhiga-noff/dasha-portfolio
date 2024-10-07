import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  isActive: boolean = false;
  public successfulResult: boolean = false;

  constructor() {}

  setActive() {
    this.isActive = true;
    this.lockScroll();
  }

  setOff() {
    this.isActive = false;
    this.successfulResult = false;
    this.lockScroll();
  }

  lockScroll() {
    const HTMLElement = document.querySelector('html');

    setTimeout(() => {
      if (this.isActive) {
        HTMLElement.classList.add('lock');
      } else {
        HTMLElement.classList.remove('lock');
      }
    }, 0);
  }
}
