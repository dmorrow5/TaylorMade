import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { BsModalRef } from 'ngx-bootstrap/modal/public_api';
import { Customer } from './customers.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public EntityForm: FormGroup;
  public event: EventEmitter<any> = new EventEmitter();
  public customer: Customer;

  constructor(private builder: FormBuilder, private dataService: DataService, private bsModalRef: BsModalRef) {
    this.customer = new Customer();

    this.EntityForm = this.builder.group({
      name: new FormControl('', []),
      address: new FormControl('', []),
      email: new FormControl('', []),
      contactNumber: new FormControl('', []),
      description: new FormControl('', [])
    });
  }

  public ngOnInit(): void {
  }

  public onFormSubmit() {
    this.dataService.add('Customer', this.customer).subscribe(result => {
      this.bsModalRef.hide();
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          //A client-side or network error occurred.				 
          console.log('An error occurred:', err.error.message);
        } else {
          //Backend returns unsuccessful response codes such as 404, 500 etc.				 
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
      });
  }

  public onClose() {
    this.bsModalRef.hide();
  }
}
