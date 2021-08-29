import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../classes/Project";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostProjectService {

  constructor(
    private http: HttpClient
  ) {}

  postProject(project: Project): Observable<any> {
    return this.http.post(environment.apiUrl + '/postProject', project);
  }
}
