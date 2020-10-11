import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contract-fees',
  templateUrl: './contract-fees.component.html',
  styleUrls: ['./contract-fees.component.css']
})
export class ContractFeesComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public contractFees: ContractFee[] = [];
  public contractFee: ContractFee = new ContractFee();

  ngOnInit(): void {
    this.contractFee = new ContractFee();
    this.http.get<ContractFee[]>(this.baseUrl + 'api/ContractFee/').subscribe(result => {
      this.contractFees = result;
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
  }

  public AddContractFee(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/ContractFee/', JSON.stringify(this.contractFee), options).subscribe(result => {
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

  public DeleteContractFee(): void {
    this.contractFees.forEach(contractFee => {
      if (contractFee.selected) {
        this.http.delete(this.baseUrl + `api/ContractFee/${contractFee.id}`).subscribe(result => {
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

class ContractFee {
  public id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  cost: number = 0.00;
  selected: boolean = false;
}
