import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [SharedModule, CommonModule, ReactiveFormsModule, RouterLink],
  exports: [SharedModule, HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}
