import { Component, OnInit } from '@angular/core';
import { bannerInfoConstant } from '../../../libs/constant/pages/banner-info.constant';
import { IItemList } from '../../../libs/types/pages/item-list.types';
import { IComunicationHR } from '../../../libs/types/pages/pages.types';

const post: IItemList = {
  title: 'Оформление постов',
  background: 'white',
  works: [
    'assets/img/pages/profit/posts/post_01.jpg',
    'assets/img/pages/profit/posts/post_02.jpg',
    'assets/img/pages/profit/posts/post_03.jpg',
    'assets/img/pages/profit/posts/post_04.jpg',
    'assets/img/pages/profit/posts/post_05.jpg',
    'assets/img/pages/profit/posts/post_06.jpg',
    'assets/img/pages/profit/posts/post_07.jpg',
    'assets/img/pages/profit/posts/post_08.jpg',
    'assets/img/pages/profit/posts/post_09.jpg',
    'assets/img/pages/profit/posts/post_10.jpg',
    'assets/img/pages/profit/posts/post_11.jpg',
    'assets/img/pages/profit/posts/post_12.jpg',
  ],
  size: 'md',
};

const hrComunication: IComunicationHR = {
  title: 'Внутринние коммуникации, взаимодействие  с HR отделом',
  sizeLG: [
    'assets/img/pages/profit/comunication/comunication-lg_01.jpg',
    'assets/img/pages/profit/comunication/comunication-lg_02.jpg',
    'assets/img/pages/profit/comunication/comunication-lg_03.jpg',
    'assets/img/pages/profit/comunication/comunication-lg_04.jpg',
    'assets/img/pages/profit/comunication/comunication-lg_05.jpg',
    'assets/img/pages/profit/comunication/comunication-lg_06.jpg',
  ],
  sizeMD: [
    'assets/img/pages/profit/comunication/comunication-md_01.jpg',
    'assets/img/pages/profit/comunication/comunication-md_02.jpg',
  ],
  sizeSM: [
    'assets/img/pages/profit/comunication/comunication-sm_01.jpg',
    'assets/img/pages/profit/comunication/comunication-sm_02.jpg',
    'assets/img/pages/profit/comunication/comunication-sm_03.jpg',
  ],
};

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

  protected posts: IItemList = post;
  protected comunication: IComunicationHR = hrComunication;

  ngOnInit() {
    this.worksKeys.forEach((key) => {
      this.worksItems.push(this.pagesName[key] as IItemList);
    });
  }
}
