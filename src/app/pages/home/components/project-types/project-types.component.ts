import { AfterViewInit, Component } from '@angular/core';
import { IProject } from '../../../../../libs/types/project-types.types';
import { projectTypesConstant } from '../../../../../libs/constant/project-types.constant';
import { AnimateService } from '../../../../animate.service';

@Component({
  selector: 'z-project-types',
  templateUrl: './project-types.component.html',
  styleUrl: './project-types.component.scss',
})
export class ProjectTypesComponent implements AfterViewInit {
  readonly types: IProject[] = projectTypesConstant;

  constructor(private animService: AnimateService) {}

  ngAfterViewInit() {
    const animItems: NodeListOf<Element> = document.querySelectorAll('.anim-items');
    this.animService.addAnimItems(animItems); // Передаем найденные элементы в сервис
  }
}
