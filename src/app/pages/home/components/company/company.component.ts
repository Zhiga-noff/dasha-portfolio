import { Component, Inject, Input } from '@angular/core';
import { ICompany } from '../../../../../libs/types/company.types';
import { DOCUMENT, ViewportScroller } from '@angular/common';

@Component({
  selector: 'z-company',
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  @Input() item: ICompany;
  @Input() back: boolean;

  constructor(
    private viewScroller: ViewportScroller,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  clickToBtn() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
