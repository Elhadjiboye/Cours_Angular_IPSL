import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../ipsl_modele";
import {etudiantBoye} from "../Donnee";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-detail-etudiant',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './detail-etudiant.component.html',
  styleUrl: './detail-etudiant.component.scss'
})
export class DetailEtudiantComponent implements OnInit {
  etudiant?:Etudiant;

  ngOnInit(): void {
    this.etudiant=etudiantBoye;
  }

}
