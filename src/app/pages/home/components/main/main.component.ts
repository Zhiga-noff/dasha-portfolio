import { Component, ElementRef, ViewChild } from '@angular/core';
import { PopupService } from '../../../../popup.service';

@Component({
  selector: 'z-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  @ViewChild('containerElement') container: ElementRef;
  @ViewChild('cursor') cursor: ElementRef;

  constructor(protected popup: PopupService) {}

  moveImage(e: MouseEvent) {
    if (window.innerWidth <= 992) {
      return;
    }

    const xPos = e.clientX / this.container.nativeElement.offsetWidth - 0.5;
    const yPos = e.clientY / this.container.nativeElement.offsetHeight - 0.5;

    this.cursor.nativeElement.style.transform = `translate(${1000 + xPos * -100}px, ${yPos * 150}px)`;
  }
}
