import { Component, Input, OnInit } from '@angular/core';
import { IItemList } from '../../../../../libs/types/pages/item-list.types';

@Component({
  selector: 'z-item-list-md',
  templateUrl: './item-list-md.component.html',
  styleUrl: './item-list-md.component.scss',
})
export class ItemListMdComponent implements OnInit {
  @Input() data: IItemList;
  protected visibleContent: string[] = [];

  ngOnInit() {
    if (this.data.works.length > 4) {
      this.visibleContent.push(...this.data.works.slice(0, 4));
    } else {
      this.visibleContent.push(...this.data.works);
    }
  }
}
