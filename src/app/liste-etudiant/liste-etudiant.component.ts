import { Component } from '@angular/core';
import {JsonPipe, NgForOf, NgIf , CommonModule} from "@angular/common";
import {Etudiant, Filiere} from "../ipsl_modele";
import {Listes_etudiants} from "../Donnee";

@Component({
  selector: 'app-liste-etudiant',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe,
    NgIf,
    CommonModule

  ],
  templateUrl: './liste-etudiant.component.html',
  styleUrl: './liste-etudiant.component.scss'
})
export class ListeEtudiantComponent {
  etudiants= Listes_etudiants;
  inputype:string="Text";
  inputvalue:String=" RAS";
  selectedEtudiant?:Etudiant ;

  styleInformatique={
    color:'white',
    "font-weight":"bold",
    "background-color":"black",
  }
  styleCivil={
    color:'white',
    "font-weight":"bold",
    "background-color":"green",
  }


  getEtudiantStyle(filiere: Filiere) {
    if(filiere.code=='INF'){
      return this.styleInformatique
    }else
    return this.styleCivil;
  }

  selectEtudiant(e: Etudiant) {
    this.selectedEtudiant=e;
  }
}
