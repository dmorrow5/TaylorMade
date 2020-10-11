import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-types',
  templateUrl: './project-types.component.html',
  styleUrls: ['./project-types.component.css']
})
export class ProjectTypesComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public projectTypes: ProjectType[];
  public projectType: ProjectType;

  ngOnInit(): void {
    this.projectType = new ProjectType();
    this.http.get<ProjectType[]>(this.baseUrl + 'api/ProjectType/').subscribe(result => {
      this.projectTypes = result;
    }, error => console.error(error));
  }

  ngOnDestroy(): void {
  }

  public AddProjectType(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/ProjectType/', JSON.stringify(this.projectType), options).subscribe(result => {
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

  public DeleteProjectType(): void {
    this.projectTypes.forEach(projectType => {
      if (projectType.selected) {
        this.http.delete(this.baseUrl + `api/ProjectType/${projectType.id}`).subscribe(result => {
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
class ProjectType {
  id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  description: string = 'some fake description';
  selected: boolean = false;
}
