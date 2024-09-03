import { Component } from '@angular/core';
import { IProject } from '../../../../../libs/types/project-types.types';
import { projectTypesConstant } from '../../../../../libs/constant/project-types.constant';

@Component({
  selector: 'z-project-types',
  templateUrl: './project-types.component.html',
  styleUrl: './project-types.component.scss',
})
export class ProjectTypesComponent {
  readonly types: IProject[] = projectTypesConstant;
}
