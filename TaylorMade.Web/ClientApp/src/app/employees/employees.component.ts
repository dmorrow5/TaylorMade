import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public employees: Employee[];
  public employee: Employee;

  ngOnInit(): void {
    this.employee = new Employee();
    this.http.get<Employee[]>(this.baseUrl + 'api/Employee/').subscribe(result => {
      this.employees = result;

      if (this.employees) {
        for (let employee of this.employees) {
          employee.startDateString = new DatePipe('en-US').transform(employee.startDate, 'shortDate');
          employee.finishDateString = new DatePipe('en-US').transform(employee.finishDate, 'shortDate');
        }
      }
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
  }

  public AddEmployee(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/Employee/', JSON.stringify(this.employee), options).subscribe(result => {
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

  public DeleteEmployee(): void {
    this.employees.forEach(employee => {
      if (employee.selected) {
        this.http.delete(this.baseUrl + `api/Employee/${employee.id}`).subscribe(result => {
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
class Employee {
  id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  startDate: Date = new Date();
  startDateString: string;
  finishDate: Date = new Date();
  finishDateString: string;
  email: string = 'something@email.com';
  contactNumber: string = '(111)111-1111';
  title: number = 0;
  hourlyPay: number = 0;
  description: string = 'Dummy Description';
  selected: boolean = false;
}
