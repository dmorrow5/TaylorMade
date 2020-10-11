import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public contracts: Contract[] = [];
  public contract: Contract;

  public projects: Project[] = [];
  public customers: Customer[] = [];

  ngOnInit(): void {
    this.contract = new Contract();
    this.http.get<Contract[]>(this.baseUrl + 'api/Contract/').subscribe(contractsResult => {
      this.contracts = contractsResult;

      if (this.contracts) {
        for (let contract of this.contracts) {
          contract.startDateString = new DatePipe('en-US').transform(contract.startDate, 'shortDate');
          contract.finishDateString = new DatePipe('en-US').transform(contract.finishDate, 'shortDate');
        }

        this.http.get<Project[]>(this.baseUrl + 'api/Project/').subscribe(projectsResult => {
          this.projects = projectsResult;

          for (let currentContract of this.contracts) {
            const project = this.projects.find(x => x.id === currentContract.projectId);

            if (project) {
              currentContract.projectName = project.name;
            }
          }
        }, projectsError => console.error(projectsError));

        this.http.get<Customer[]>(this.baseUrl + 'api/Customer/').subscribe(customerResult => {
          this.customers = customerResult;

          if (this.contracts) {
            for (let currentContract of this.contracts) {
              const customer = this.customers.find(x => x.id === currentContract.customerId);

              if (customer) {
                currentContract.customerName = customer.name;
              }
            }
          }
        }, customerError => console.error(customerError));
      }
    }, contractsError => console.error(contractsError));
  }

  ngOnDestroy(): void {
  }

  public AddContract(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/Contract/', JSON.stringify(this.contract), options).subscribe(result => {
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

  public DeleteContract(): void {
    this.contracts.forEach(contract => {
      if (contract.selected) {
        this.http.delete(this.baseUrl + `api/Contract/${contract.id}`).subscribe(result => {
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
class Contract {
  id: string = '00000000-0000-0000-0000-000000000000';
  projectId: string = '00000000-0000-0000-0000-000000000000';
  projectName: string;
  customerId: string = '00000000-0000-0000-0000-000000000000';
  customerName: string;
  name: string = 'Default Name';
  startDate: Date = new Date();
  startDateString: string;
  finishDate: Date = new Date();
  finishDateString: string;
  estimatedCost: number;
  actualCost: number;
  notes: string = 'Some Notes about this entity';
  selected: boolean = false;
}

class Project {
  id: string = '00000000-0000-0000-0000-000000000000';
  projectTypeId: string = '00000000-0000-0000-0000-000000000000';
  projectTypeName: string = '';
  name: string = 'Default Name';
  propertyType: number = 0;
  description: string = 'some fake description';
  selected: boolean = false;
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
