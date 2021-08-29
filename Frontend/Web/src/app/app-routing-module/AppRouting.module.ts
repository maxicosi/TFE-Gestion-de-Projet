import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccueilComponent } from '../accueil/accueil.component';
import {NewProjectComponent} from "../new-project/new-project.component";
import {AssignProjectComponent} from "../assign-project/assign-project.component";
import { ConnexionComponent } from "../connexion/connexion.component";
import {NewTaskComponent} from "../new-task/new-task.component";
import {NewProgrammeComponent} from "../new-programme/new-programme.component";
import {Affichage} from "../classes/affichage";
import {ProjectComponent} from "../project/project.component";
import {TaskComponent} from "../task/task.component";


const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'Accueil',
    component: AccueilComponent
  },
  {
    path: 'NewProject',
    component : NewProjectComponent
  },
  {
    path: 'AssignProject',
    component : AssignProjectComponent
  },
  {
    path: 'Connexion',
    component : ConnexionComponent
  },
  {
  path : 'NewTask',
  component : NewTaskComponent
  },
  {
    path : 'NewProgramme',
    component : NewProgrammeComponent
  },
  {
    path: 'Project/:ProjectId',
    component: ProjectComponent
  },
  {
    path: 'Task/:TaskId',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
