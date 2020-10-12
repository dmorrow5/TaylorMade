import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'customer',
        component: CustomerComponent
      }
    ]),
  ],
  declarations: [
    CustomerComponent,
    CustomersComponent
  ],
  exports: [
    CustomerComponent,
    CustomersComponent
  ]
})
export class CustomersModule { }
