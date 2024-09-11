import { Component, Input } from '@angular/core';
import { IItemList } from '../../../../../libs/types/pages/item-list.types';

@Component({
  selector: 'z-item-list-lg',
  templateUrl: './item-list-lg.component.html',
  styleUrl: './item-list-lg.component.scss',
})
export class ItemListLgComponent {
  @Input() data: IItemList;
}
