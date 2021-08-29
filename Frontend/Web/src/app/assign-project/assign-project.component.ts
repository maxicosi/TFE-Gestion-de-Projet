import { Component, OnInit } from '@angular/core';
import {PostWorkService} from "../services/post-work.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ProjectService} from "../services/project.service";
import {GetProject} from "../classes/GetProject";
import {Tasks} from "../classes/tasks";
import {TaskService} from "../services/task.service";
import {Users} from "../classes/Users";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent implements OnInit {

  constructor(
    private postWork: PostWorkService,
    private readonly formBuilder: FormBuilder,
    private getProject: ProjectService,
    private getTask: TaskService,
    private getUsers: UserService
  ) {}

  lstTasks: Tasks[] | undefined;
  lstUsers: Users[] | undefined
  lstProjects: GetProject[] | undefined;

  workForm = this.formBuilder.group({
    formWorkProjectId: [null, Validators.required],
    formWorkTaskId: [null, Validators.required],
    formWorkUserId: [null, Validators.required],
    formWorkAssignedTime: [null, Validators.required],
    formWorkStartDate:[null, Validators.required],
    formWorkEndDate:[null, Validators.required]
  })
  ngOnInit(): void {
    this.getProject.getProject()
      .subscribe(
        data => {
          this.lstProjects = data.response;
        }
      );

    this.getTask.getTask()
      .subscribe(
        data => {
          this.lstTasks = data.response;
        }
      );

    this.getUsers.getUsers()
      .subscribe(
        data => {
          this.lstUsers = data.response;
        }
      )
  }



  submit() {
    if(this.workForm.invalid) {
      console.log('Formulaire invalide !');
      return;
    }
    const data = this.workForm.getRawValue();
    console.log(data);
    this.postWork.postWork(data).subscribe((s) => {
      if(s) {
        console.log('Work created');
      }
    })
  }
}
