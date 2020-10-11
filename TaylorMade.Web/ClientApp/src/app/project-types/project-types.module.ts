import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTypesComponent } from './project-types.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProjectTypesComponent
  ],
  exports: [
    ProjectTypesComponent
  ]
})
export class ProjectTypesModule { }
