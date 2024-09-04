import { Component } from '@angular/core';
import { companyConstant } from '../../../libs/constant/company.constant';
import { ICompany } from '../../../libs/types/company.types';

@Component({
  selector: 'z-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly company: ICompany[] = companyConstant;
}
