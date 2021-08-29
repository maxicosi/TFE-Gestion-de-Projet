import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  askedroute: number | undefined;
  detail: any;
  works: any;

  ngOnInit(): void {
    this.askedroute = this.route.snapshot.params['TaskId']
    this.http.get(environment.apiUrl + '/tasks?TaskId=' + this.askedroute)
      .subscribe((data) => {
        // @ts-ignore
        this.detail = data[Object.keys(data)[2]][0];
        console.log(this.detail)
      })
    this.http.get(environment.apiUrl + '/Works?TaskId=' + this.askedroute)
      .subscribe((res) => {
        // @ts-ignore
        this.works = res[Object.keys(res)[2]];
        console.log(this.works)
      })
  }
}

