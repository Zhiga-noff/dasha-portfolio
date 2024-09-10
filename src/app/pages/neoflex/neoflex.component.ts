import { Component, OnInit } from '@angular/core';
import { bannerInfoConstant } from '../../../libs/constant/pages/banner-info.constant';
import { IItemList } from '../../../libs/types/pages/item-list.types';

@Component({
  selector: 'z-neoflex',
  templateUrl: './neoflex.component.html',
  styleUrl: './neoflex.component.scss',
})
export class NeoflexComponent implements OnInit {
  protected pagesName = bannerInfoConstant.neoflex;
  protected banner = this.pagesName.banner;
  protected worksKeys = Object.keys(bannerInfoConstant.neoflex).filter(
    (item) => item !== 'banner',
  );

  protected worksItems: IItemList[] = [];

  ngOnInit() {
    this.worksKeys.forEach((key) => {
      this.worksItems.push(this.pagesName[key] as IItemList);
    });
  }
}
