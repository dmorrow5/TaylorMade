import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseURL: string) {
  }

  get(entityType: string) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.get(this.baseURL + `api/${entityType}/`, { headers: header })
  }

  add(entityType: string, entity: any) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.baseURL + `api/${entityType}/`, JSON.stringify(entity), options)
  }

  edit(entityType: string, id: string, entity: any) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.put(this.baseURL + `api/${entityType}/${id}`, JSON.stringify(entity), { headers: header })
  }

  delete(entityType: string, id: string) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.delete(this.baseURL + `api/${entityType}/${id}`, { headers: header })
  }
}
