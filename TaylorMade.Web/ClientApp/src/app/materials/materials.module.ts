import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialsComponent } from './materials.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MaterialsComponent
  ],
  exports: [
    MaterialsComponent
  ]
})
export class MaterialsModule { }
