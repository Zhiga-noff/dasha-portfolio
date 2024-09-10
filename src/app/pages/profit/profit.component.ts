import { Component } from '@angular/core';
import { bannerInfoConstant } from '../../../libs/constant/pages/banner-info.constant';

@Component({
  selector: 'z-profit',
  templateUrl: './profit.component.html',
  styleUrl: './profit.component.scss',
})
export class ProfitComponent {
  protected pagesName = bannerInfoConstant.profit.banner;
}
