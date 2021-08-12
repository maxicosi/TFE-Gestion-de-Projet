import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AccueilComponent } from '../accueil/accueil.component';
import {NewProjectComponent} from "../new-project/new-project.component";
import {AssignProjectComponent} from "../assign-project/assign-project.component";
import { ConnexionComponent } from "../connexion/connexion.component";
import {NewTaskComponent} from "../new-task/new-task.component";
import {NewProgrammeComponent} from "../new-programme/new-programme.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
