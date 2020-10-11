import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public materials: Material[];
  public material: Material;

  ngOnInit(): void {
    this.material = new Material();
    this.http.get<Material[]>(this.baseUrl + 'api/Material/').subscribe(result => {
      this.materials = result;
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
  }

  public AddMaterial(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/Material/', JSON.stringify(this.material), options).subscribe(result => {
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

  public DeleteMaterial(): void {
    this.materials.forEach(material => {
      if (material.selected) {
        this.http.delete(this.baseUrl + `api/Material/${material.id}`).subscribe(result => {
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
class Material {
  id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  quantity: number = 0;
  cost: number = 0.00;
  description: string = 'Some fake description';
  selected: boolean = false;
}
