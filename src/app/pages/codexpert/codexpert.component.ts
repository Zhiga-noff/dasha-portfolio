import { Component } from '@angular/core';
import { bannerInfoConstant } from '../../../libs/constant/pages/banner-info.constant';

@Component({
  selector: 'z-codexpert',
  templateUrl: './codexpert.component.html',
  styleUrl: './codexpert.component.scss',
})
export class CodexpertComponent {
  protected pagesName = bannerInfoConstant.codexpert.banner;
}
