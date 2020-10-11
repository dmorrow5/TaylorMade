import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContractsComponent } from './contracts.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContractsComponent
  ],
  exports: [
    ContractsComponent
  ]
})
export class ContractsModule { }
