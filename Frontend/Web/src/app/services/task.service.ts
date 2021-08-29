import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http:HttpClient
  ) {}

  getTask(): Observable<any> {
    return this.http.get( environment.apiUrl + '/tasks');
  }
}
