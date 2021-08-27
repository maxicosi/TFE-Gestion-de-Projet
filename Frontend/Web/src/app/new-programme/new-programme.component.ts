import { Component, OnInit } from '@angular/core';
import {GetProject} from "../classes/GetProject";
import {ProjectService} from "../services/project.service";
import {FormBuilder, Validators} from "@angular/forms";
import {PostProgrammeService} from "../services/post-programme.service";

@Component({
  selector: 'app-new-programme',
  templateUrl: './new-programme.component.html',
  styleUrls: ['./new-programme.component.css']
})
export class NewProgrammeComponent implements OnInit {

  constructor(
    private getProject: ProjectService,
    private readonly formBuilder: FormBuilder,
    private postProgramme: PostProgrammeService
  ) {}

  lstProjects: GetProject[] | undefined;
  ProgrammeForm = this.formBuilder.group({
    formProgrammeName: [null, Validators.required],
    formProgrammeProjectId: [null, Validators.required],
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
    if(this.ProgrammeForm.invalid) {
      console.log('invalid form !');
      return;
    }
    const data = this.ProgrammeForm.getRawValue();
    console.log(data);
    this.postProgramme.postProgramme(data).subscribe((s) => {
      if(s) {
        console.log('Programme created');
      }
    })
  }
}
