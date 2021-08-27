import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PostTask} from "../classes/post-task";


@Injectable({
  providedIn: 'root'
})
export class PostTaskService {

  constructor(
    private http: HttpClient
  ){}

  postTask(task: PostTask): Observable<any> {
    return this.http.post(environment.apiUrl + '/postTask', task);
  }
}
