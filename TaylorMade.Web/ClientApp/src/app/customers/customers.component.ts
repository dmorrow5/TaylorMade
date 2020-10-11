import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public customers: Customer[];
  public customer: Customer;

  ngOnInit(): void {
    this.customer = new Customer();
    this.http.get<Customer[]>(this.baseUrl + 'api/Customer/').subscribe(result => {
      this.customers = result;
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
  }

  public AddCustomer(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/Customer/', JSON.stringify(this.customer), options).subscribe(result => {
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

  public DeleteCustomer(): void {
    this.customers.forEach(customer => {
      if (customer.selected) {
        this.http.delete(this.baseUrl + `api/Customer/${customer.id}`).subscribe(result => {
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
class Customer {
  id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  address: string = 'A place farther than the universe';
  email: string = 'something@email.com';
  contactNumber: string = '(111)111-1111';
  description: string = 'someDescription';
  selected: boolean = false;
}
