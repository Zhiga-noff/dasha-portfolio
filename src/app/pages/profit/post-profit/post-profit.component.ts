import { Component, Input, OnInit } from '@angular/core';
import { IItemList } from '../../../../libs/types/pages/item-list.types';

@Component({
  selector: 'z-post-profit',
  templateUrl: './post-profit.component.html',
  styleUrl: './post-profit.component.scss',
})
export class PostProfitComponent implements OnInit {
  @Input() data: IItemList;
  protected visibleContent: string[] = [];

  ngOnInit() {
    if (this.data.works.length > 6) {
      this.visibleContent.push(...this.data.works.slice(0, 6));
    } else {
      this.visibleContent.push(...this.data.works);
    }
  }

  showMoreWorks() {
    const addingElements = this.data.works.slice(
      this.visibleContent.length,
      this.visibleContent.length + 3,
    );
    this.visibleContent.push(...addingElements);
  }
}
