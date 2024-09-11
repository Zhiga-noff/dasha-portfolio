import { IItemList } from './item-list.types';

export interface ICompanyPages {
  neoflex: { banner: IBannerInfo; [keys: string]: IItemList | IBannerInfo };
  profit: { banner: IBannerInfo; [keys: string]: IItemList | IBannerInfo };
  codexpert: { banner: IBannerInfo; [keys: string]: IItemList | IBannerInfo };
  otherProjects: { banner: IBannerInfo; [keys: string]: IItemList | IBannerInfo };
}

export interface IBannerInfo {
  name: string | null;
  logo: string | null;
  description: string;
}

export interface IComunicationHR {
  title: string;
  sizeLG: string[];
  sizeMD: string[];
  sizeSM: string[];
}
