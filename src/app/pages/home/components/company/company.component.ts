import { Component, Input } from '@angular/core';
import { ICompany } from '../../../../../libs/types/company.types';

@Component({
  selector: 'z-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  @Input() item: ICompany;
  @Input() back: boolean;
}
