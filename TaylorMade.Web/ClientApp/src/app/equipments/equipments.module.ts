import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EquipmentsComponent } from './equipments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    EquipmentsComponent
  ],
  exports: [
    EquipmentsComponent
  ]
})
export class EquipmentsModule { }
