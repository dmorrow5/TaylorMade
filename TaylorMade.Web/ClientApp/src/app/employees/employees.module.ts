import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesComponent } from './employees.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EmployeesComponent
  ],
  exports: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }
