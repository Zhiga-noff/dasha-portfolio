import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TelegramIconComponent } from './footer/telegram-icon/telegram-icon.component';
import { VkComponent } from './footer/vk/vk.component';
import { FormComponent } from './form/form.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ItemListLgComponent } from './ui/item-list-lg/item-list-lg.component';
import { ItemListMdComponent } from './ui/item-list-md/item-list-md.component';
import { PopUpAdComponent } from './pop-up-ad/pop-up-ad.component';
import { ScrollUpBtnComponent } from './scroll-up-btn/scroll-up-btn.component';

@NgModule({
  imports: [SharedModule, CommonModule, ReactiveFormsModule, RouterLink],
  exports: [
    SharedModule,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    MainBannerComponent,
    ItemListMdComponent,
    ItemListLgComponent,
    PopUpAdComponent,
    ScrollUpBtnComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TelegramIconComponent,
    VkComponent,
    FormComponent,
    MainBannerComponent,
    ItemListLgComponent,
    ItemListMdComponent,
    PopUpAdComponent,
    ScrollUpBtnComponent,
  ],
})
export class ComponentsModule {}
