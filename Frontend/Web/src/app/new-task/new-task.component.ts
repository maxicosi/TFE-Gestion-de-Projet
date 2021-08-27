import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../services/project.service";
import {GetProject} from "../classes/GetProject";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {PostTaskService} from "../services/post-task.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(
    private getProject : ProjectService,
    private readonly formBuilder: FormBuilder,
    private postTask: PostTaskService
  ){
  }

  lstProjects: GetProject[] | undefined;
  TaskForm = this.formBuilder.group({
    formTaskProjectId: [null, Validators.required],
    formTaskName: [null, Validators.required],
    formTaskDescription: [null, Validators.required],
    formTaskAssignedTime: [null, Validators.required]
  })


  ngOnInit(): void {

    this.getProject.getProject()
      .subscribe(
        data => {
          this.lstProjects = data.response;
        }
      );
  }

  submit(){
    if(this.TaskForm.invalid) {
      console.log('invalid form !');
      return;
    }
    const data = this.TaskForm.getRawValue();
    console.log(data);
    this.postTask.postTask(data).subscribe((s) => {
      if(s) {
        console.log('Task created');
      }
    })
  }
}
