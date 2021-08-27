import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../services/customer.service";
import {Customer} from "../classes/Customer";
import {Category} from "../classes/Category";
import {CategoryService} from "../services/category.service";
import {PostProjectService} from "../services/post-project.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(
    private Client: CustomerService,
    private Categories: CategoryService,
    private postProject: PostProjectService,
    private readonly formBuilder: FormBuilder
  ) {
  }

  lstCustomer: Customer[] | undefined;
  lstCategory: Category[] | undefined;

  projectForm = this.formBuilder.group({
    formProjectName: [null, Validators.required],
    formProjectCategoryId: [null, Validators.required],
    formProjectCustomerId: [null, Validators.required],
    formProjectDescription: null,
    formProjectStartDate: [ new Date(), Validators.required],
    formProjectEndDate: [null, Validators.required]
  })

  ngOnInit(): void {
    this.Client.getCustomer()
      .subscribe(
        data => {
          this.lstCustomer = data.response;
        }
      );

    this.Categories.getCategory()
      .subscribe(
        data => {
          this.lstCategory = data.response;
        });

  }

  submit() {
    if(this.projectForm.invalid) {
      console.log('Formulaire invalide !');
      return;
    }
    const data = this.projectForm.getRawValue();
    if (data.formProjectDescription === null) { data.formProjectDescription = "no description"; }
    // if(data.formProjectStartDate <= data.formProjectEndDate){
    //  alert('the dates are not correctly encoded, please enter a date higher than the end date of the project.' );
    //  return;
    //}
    console.log(data);
    this.postProject.postProject(data).subscribe((s) => {
      if(s) {
        console.log('Project created');
      }
    })
  }
}
