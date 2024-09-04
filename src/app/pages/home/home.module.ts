import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ProjectTypesComponent } from './components/project-types/project-types.component';
import { TypeComponent } from './components/project-types/type/type.component';
import { CompanyComponent } from './components/company/company.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [MainComponent, ProjectTypesComponent, TypeComponent, CompanyComponent],
  exports: [MainComponent, ProjectTypesComponent, CompanyComponent],
  imports: [CommonModule, RouterLink],
})
export class HomeModule {}
