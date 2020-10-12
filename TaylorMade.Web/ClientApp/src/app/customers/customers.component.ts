import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { DataService } from '../shared/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/Modal';
import { CustomerComponent } from './customer.component';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnDestroy, OnInit {
  constructor(private dataService: DataService, private bsModalService: BsModalService) {
  }

  public customers: Customer[];
  public bsModalRef: BsModalRef;

  ngOnInit(): void {
    this.customers = [];

    this.dataService.get('Customer').subscribe(
      result => Object.assign(this.customers, result),
      error => console.error(error)
    );
  }

  ngOnDestroy(): void {
  }

  addNewEntity() {
    this.bsModalRef = this.bsModalService.show(CustomerComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        this.ngOnInit();
      }
    });
  }

  public DeleteCustomer(): void {
    this.customers.forEach(customer => {
      if (customer.selected) {
        this.dataService.delete('Customer', customer.id).subscribe(result => {
          this.ngOnInit();
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
    });
    this.ngOnInit();
  }
}

export class Customer {
  id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  address: string = 'A place farther than the universe';
  email: string = 'something@email.com';
  contactNumber: string = '(111)111-1111';
  description: string = 'someDescription';
  selected: boolean = false;
}
