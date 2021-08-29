import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AffichageService {
  constructor(private http: HttpClient) {
  }


  getAffichage(): Observable<any> {
    return this.http.get(environment.apiUrl + '/affichage');
  }
}
