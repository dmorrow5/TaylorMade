import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnDestroy, OnInit {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public projects: Project[] = [];
  public project: Project;

  public projectTypes: ProjectType[] = [];

  ngOnInit(): void {
    this.project = new Project();
    this.http.get<Project[]>(this.baseUrl + 'api/Project/').subscribe(projectsResult => {
      this.projects = projectsResult;

      this.http.get<ProjectType[]>(this.baseUrl + 'api/ProjectType/').subscribe(projectTypesResult => {
        this.projectTypes = projectTypesResult;
  
        for (let currentProject of this.projects) {
          const projectType = this.projectTypes.find(x => x.id === currentProject.projectTypeId);
  
          if (projectType) {
            currentProject.projectTypeName = projectType.name;
          }
        }
      }, projectsTypesError => console.error(projectsTypesError));
    }, projectsError => console.error(projectsError));
  }

  ngOnDestroy(): void {
  }

  public AddProject(): void {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    this.http.post(this.baseUrl + 'api/Project/', JSON.stringify(this.project), options).subscribe(result => {
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

  public DeleteProject(): void {
    this.projects.forEach(project => {
      if (project.selected) {
        this.http.delete(this.baseUrl + `api/Project/${project.id}`).subscribe(result => {
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
class Project {
  id: string = '00000000-0000-0000-0000-000000000000';
  projectTypeId: string = '00000000-0000-0000-0000-000000000000';
  projectTypeName: string = '';
  name: string = 'Default Name';
  propertyType: number = 0;
  description: string = 'some fake description';
  selected: boolean = false;
}

class ProjectType {
  id: string = '00000000-0000-0000-0000-000000000000';
  name: string = 'Default Name';
  description: string = 'some fake description';
  selected: boolean = false;
}
