import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimateService {
  protected animItems: Element[];

  constructor() {}

  addAnimItems(items: NodeListOf<Element>) {
    this.animItems = Array.from(items);
  }

  offset(el) {
    const rect = el.getBoundingClientRect();
    let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  animOnScroll = () => {
    for (let index = 0; index < this.animItems.length; index++) {
      const animItem: HTMLElement = this.animItems[index] as HTMLElement;
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = this.offset(animItem).top;
      const animStart = 3;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('anim');
      } else {
        if (!animItem.classList.contains('no-anim-again')) {
          animItem.classList.remove('anim');
        }
      }
    }
  };
}
