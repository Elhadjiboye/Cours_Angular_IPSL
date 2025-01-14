import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeEnseignantComponent } from './liste-enseignant/liste-enseignant.component';
import { Error404Component } from './error404/error404.component';
import {DetailEtudiantComponent} from "./detail-etudiant/detail-etudiant.component";
import {ListeEtudiant2Component} from "./liste-etudiant2/liste-etudiant2.component";
import {AddEtudiantComponent} from "./add-etudiant/add-etudiant.component";

export const routes: Routes = [
  {path: '', redirectTo: "/Accueil",pathMatch:'full'},
  {path: 'Accueil', component:AccueilComponent},
  {path: 'etudiants', component:ListeEtudiantComponent},
  {path: 'add_etudiant', component:AddEtudiantComponent},
  {path: 'etudiants2', component:ListeEtudiant2Component},
  {path: 'enseigants', component:ListeEnseignantComponent},
  {path: 'detail_etudiant', component:DetailEtudiantComponent},
  {path: '**', component:Error404Component},


];
