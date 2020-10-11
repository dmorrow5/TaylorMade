import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContractFeesComponent } from './contract-fees.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ContractFeesComponent
  ],
  exports: [
    ContractFeesComponent
  ]
})
export class ContractFeesModule { }
