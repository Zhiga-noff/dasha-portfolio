import { Component, Input } from '@angular/core';
import { IComunicationHR } from '../../../../libs/types/pages/pages.types';

@Component({
  selector: 'z-comunication',
  templateUrl: './comunication.component.html',
  styleUrl: './comunication.component.scss',
})
export class ComunicationComponent {
  @Input() data: IComunicationHR;
}
