import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AffichageService} from "../services/affichage.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Affichage} from "../classes/affichage";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  askedroute: number | undefined;
  detail: any;
  tasks : any;


  ngOnInit(): void {
    this.askedroute = this.route.snapshot.params['ProjectId']
    console.log(this.askedroute)
    this.http.get(environment.apiUrl + '/affichage?ProjectId=' + this.askedroute)
      .subscribe((data) => {
        // @ts-ignore
        this.detail = data[Object.keys(data)[2]][0];
        console.log(this.detail)
      })
    this.http.get(environment.apiUrl + '/tasks?ProjectId=' + this.askedroute)
      .subscribe((res) => {
        // @ts-ignore
        this.tasks = res[Object.keys(res)[2]];
        console.log(this.tasks)
      })
  }
}

