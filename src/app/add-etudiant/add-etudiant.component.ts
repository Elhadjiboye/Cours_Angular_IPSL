import { Component } from '@angular/core';
import {Etudiant, EtudiantDTO} from "../ipsl_modele";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-etudiant',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.scss'
})
export class AddEtudiantComponent {
etudiant: EtudiantDTO= {
  code:'',
  prenom:'',
  nom:'',
  email:'',
  telefone:'',
  address:'',
  CodeClasse:'',
  CodeDepartement:'',
};



}
