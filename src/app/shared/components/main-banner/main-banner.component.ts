import { Component, Input } from '@angular/core';
import { IBannerInfo } from '../../../../libs/types/pages/pages.types';

@Component({
  selector: 'z-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss',
})
export class MainBannerComponent {
  @Input() data: IBannerInfo;
}
