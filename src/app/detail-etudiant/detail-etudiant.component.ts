import {Component, OnInit} from '@angular/core';
import {Carte_Etudiant, Etudiant} from "../ipsl_modele";
import {carteBoye, etudiantBoye} from "../Donnee";
import {DatePipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-detail-etudiant',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe
  ],
  templateUrl: './detail-etudiant.component.html',
  styleUrl: './detail-etudiant.component.scss'
})
export class DetailEtudiantComponent implements OnInit {
  carte?:Carte_Etudiant;
  etudiant?:Etudiant;

  ngOnInit(): void {
    this.carte=carteBoye;
    this.etudiant=etudiantBoye;
  }

  getAnneeScolaire():String{
    if(this.carte?.anneeD_debut){
      // @ts-ignore
      return `${this.carte?.anneeD_debut} - ${this.carte?.anneeD_debut +1}`;
    }
    return "Annee non determiner";
  }

}
