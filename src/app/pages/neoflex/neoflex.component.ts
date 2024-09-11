import { Component, OnInit } from '@angular/core';
import { bannerInfoConstant } from '../../../libs/constant/pages/banner-info.constant';
import { IItemList } from '../../../libs/types/pages/item-list.types';

const post: IItemList = {
  title: 'Оформление постов',
  background: 'white',
  works: [
    'assets/img/pages/neoflex/posts/post_10.jpg',
    'assets/img/pages/neoflex/posts/post_09.jpg',
    'assets/img/pages/neoflex/posts/post_08.jpg',
    'assets/img/pages/neoflex/posts/post_07.jpg',
    'assets/img/pages/neoflex/posts/post_06.jpg',
    'assets/img/pages/neoflex/posts/post_05.jpg',
    'assets/img/pages/neoflex/posts/post_04.jpg',
    'assets/img/pages/neoflex/posts/post_03.jpg',
    'assets/img/pages/neoflex/posts/post_02.jpg',
    'assets/img/pages/neoflex/posts/post_01.jpg',
  ],
  size: 'md',
};

@Component({
  selector: 'z-neoflex',
  templateUrl: './neoflex.component.html',
  styleUrl: './neoflex.component.scss',
})
export class NeoflexComponent implements OnInit {
  protected pagesName = bannerInfoConstant.neoflex;
  protected banner = this.pagesName.banner;
  protected worksKeys = Object.keys(this.pagesName).filter((item) => item !== 'banner');
  protected posts = post;

  protected worksItems: IItemList[] = [];

  ngOnInit() {
    this.worksKeys.forEach((key) => {
      this.worksItems.push(this.pagesName[key] as IItemList);
    });
  }
}
