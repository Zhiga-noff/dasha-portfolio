import { Component, Input } from '@angular/core';
import { IItemList } from '../../../../libs/types/pages/item-list.types';

@Component({
  selector: 'z-post-profit',
  templateUrl: './post-profit.component.html',
  styleUrl: './post-profit.component.scss',
})
export class PostProfitComponent {
  @Input() data: IItemList;
}
