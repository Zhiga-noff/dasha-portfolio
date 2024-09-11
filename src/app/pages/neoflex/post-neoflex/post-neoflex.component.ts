import { Component, Input } from '@angular/core';
import { IItemList } from '../../../../libs/types/pages/item-list.types';

@Component({
  selector: 'z-post-neoflex',
  templateUrl: './post-neoflex.component.html',
  styleUrl: './post-neoflex.component.scss',
})
export class PostNeoflexComponent {
  @Input() data: IItemList;
}
