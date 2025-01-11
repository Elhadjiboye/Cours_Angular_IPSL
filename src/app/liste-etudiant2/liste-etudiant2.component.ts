import { Component } from '@angular/core';
import {Etudiant} from "../ipsl_modele";
import {JsonPipe, NgForOf,CommonModule} from "@angular/common";
import {Listes_etudiants} from "../Donnee";

@Component({
  selector: 'app-liste-etudiant2',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    CommonModule
  ],
  templateUrl: './liste-etudiant2.component.html',
  styleUrl: './liste-etudiant2.component.scss'
})
export class ListeEtudiant2Component {
  etudiants= Listes_etudiants;
  selectedIndex: number | null = null;
  selectedEtudiant?:Etudiant ;


  styleInformatique={
    color:'white',
    "font-weight":"bold",
    "background-color":"rgb(189,141,14)",
  }
  styleCivil={
    color:'white',
    "font-weight":"bold",
    "background-color":"green",
  }


  stylePair(e: number, i: Etudiant) {
    if(i!=null){
      if(e%2==0){
        return this.styleInformatique
      }
      return this.styleCivil;
    }
    return {};
  }
  // Méthode pour retourner le style basé sur la sélection
  selectedLine(e: number) {
    return this.selectedIndex === e
      ? { 'background-color': 'rgb(0,0,0)', 'color': '#f8f8f8' }
      : {};
  }

  selectLine(index: number) {
    this.selectedIndex = index; // Met à jour l'index sélectionné
  }
  mergeStyles(baseStyle: any, overrideStyle: any): any {
    return { ...baseStyle, ...overrideStyle }; // Fusionne les styles
  }

}
