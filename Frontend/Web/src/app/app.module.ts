import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClassesComponent } from './classes/classes.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {AppRoutingModule} from "./app-routing-module/AppRouting.module";
import { NewTaskComponent } from './new-task/new-task.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { NewProgrammeComponent } from './new-programme/new-programme.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ClassesComponent,
    NewProjectComponent,
    AssignProjectComponent,
    ConnexionComponent,
    NewTaskComponent,
    FilterComponent,
    SearchComponent,
    NewProgrammeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
