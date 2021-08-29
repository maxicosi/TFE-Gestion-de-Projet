import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {PostWork} from "../classes/post-work";

@Injectable({
  providedIn: 'root'
})
export class PostWorkService {

  constructor(
    private http: HttpClient
  ){}

  postWork(work: PostWork): Observable<any> {
    return this.http.post(environment.apiUrl + '/postWork', work);
  }
}
