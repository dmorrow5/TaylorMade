import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public equipments: Equipment[];
  public equipment: Equipment;

  ngOnInit(): void {
    this.equipment = new Equipment();
    this.http.get<Equipment[]>(this.baseUrl + 'api/Equipment/').subscribe(result => {
      this.equipments = result;
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
  }

  public AddEquipment(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/Equipment/', JSON.stringify(this.equipment), options).subscribe(result => {
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

  public DeleteEquipment(): void {
    this.equipments.forEach(equipment => {
      if (equipment.selected) {
        this.http.delete(this.baseUrl + `api/Equipment/${equipment.id}`).subscribe(result => {
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
class Equipment {
  id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  quantity: number = 0;
  cost: number = 0.00;
  location: string = 'Some fake location';
  description: string = 'Some fake description';
  selected: boolean = false;
}
