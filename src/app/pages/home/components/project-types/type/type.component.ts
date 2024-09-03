import { Component, Input } from '@angular/core';
import { IProject } from '../../../../../../libs/types/project-types.types';

@Component({
  selector: 'z-type',
  templateUrl: './type.component.html',
  styleUrl: './type.component.scss',
})
export class TypeComponent {
  @Input() type: IProject;
}
