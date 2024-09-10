import { Component, OnInit } from '@angular/core';
import { bannerInfoConstant } from '../../../libs/constant/pages/banner-info.constant';
import { IItemList } from '../../../libs/types/pages/item-list.types';

@Component({
  selector: 'z-profit',
  templateUrl: './profit.component.html',
  styleUrl: './profit.component.scss',
})
export class ProfitComponent implements OnInit {
  protected pagesName = bannerInfoConstant.profit;
  protected banner = this.pagesName.banner;
  protected worksKeys = Object.keys(this.pagesName).filter((item) => item !== 'banner');

  protected worksItems: IItemList[] = [];

  ngOnInit() {
    this.worksKeys.forEach((key) => {
      this.worksItems.push(this.pagesName[key] as IItemList);
    });
  }
}
