import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Programme} from "../classes/programme";

@Injectable({
  providedIn: 'root'
})
export class PostProgrammeService {

  constructor(
   private http: HttpClient
  ){}

  postProgramme(programme: Programme): Observable<any> {
    return this.http.post(environment.apiUrl + '/postProgramme', programme);
  }
}
