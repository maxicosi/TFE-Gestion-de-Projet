import { Component, OnInit } from '@angular/core';
import {Affichage} from "../classes/affichage";
import {AffichageService} from "../services/affichage.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(
    private getAffichage : AffichageService

  ){}

  lstProjects: Affichage[] | undefined;

  ngOnInit(): void {

  this.getAffichage.getAffichage()
.subscribe(
    data => {
  this.lstProjects = data.response;
  console.log(data);
    });
  }
}

