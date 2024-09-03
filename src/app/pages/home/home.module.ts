import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ProjectTypesComponent } from './components/project-types/project-types.component';
import { TypeComponent } from './components/project-types/type/type.component';

@NgModule({
  declarations: [MainComponent, ProjectTypesComponent, TypeComponent],
  exports: [MainComponent],
  imports: [CommonModule],
})
export class HomeModule {}
