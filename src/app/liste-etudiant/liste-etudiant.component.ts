import { Component } from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {Etudiant} from "../ipsl_modele";
import {Listes_etudiants} from "../Donnee";

@Component({
  selector: 'app-liste-etudiant',
  standalone: true,
  imports: [
    NgForOf,
    JsonPipe
  ],
  templateUrl: './liste-etudiant.component.html',
  styleUrl: './liste-etudiant.component.scss'
})
export class ListeEtudiantComponent {
  etudiants= Listes_etudiants;
}
