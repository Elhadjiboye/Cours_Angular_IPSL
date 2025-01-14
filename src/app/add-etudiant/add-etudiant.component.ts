import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { JsonPipe,NgForOf, NgIf , CommonModule} from "@angular/common";
import {Departement, Etudiant, EtudiantDTO, Filiere} from "../ipsl_modele";
import {FormsModule} from "@angular/forms";
import {ListeDept, Listes_etudiants} from "../Donnee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-etudiant',
  standalone: true,
  imports: [
    FormsModule, NgForOf, NgIf , CommonModule,JsonPipe
  ],
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.scss'
})
export class AddEtudiantComponent   {



  listesFilieres:Filiere[]=[];
  etudiant: EtudiantDTO= {
    code:'',
    prenom:'',
    nom:'',
    email:'',
    telefone:'',
    address:'',
    CodeClasse:'',
    CodeDepartement:'',
    CodeFiliere:'',
  };

  tabDepartement=ListeDept;
  listeEtu=Listes_etudiants;

  public constructor(private _router:Router) {

  }

  listefilier() {
    this.listesFilieres=[];
    if(this.listesFilieres)
    if (!this.etudiant.CodeDepartement) {
      return ;
    }

    const filiereMap: Map<string, Filiere> = new Map();
    const etudiants = Listes_etudiants;

    for (let i = 0; i < etudiants.length; i++) {
      const filiere: Filiere = etudiants[i].classe.filiere;
      if (filiere.dept.code === this.etudiant.CodeDepartement ) {
        if( !filiereMap.has(filiere.code)){
          filiereMap.set(filiere.code, filiere);
          this.listesFilieres.push(filiere);
        }
      }
    }

  }

  enregistrer() {
    console.log("Enregistrement de :", this.etudiant);
    for(let i=0; i < this.listeEtu.length; i++){
      var e =this.listeEtu;
      var classe=this.listeEtu[i].classe;
      if(classe.code==this.etudiant.CodeClasse &&
        classe.filiere.code==this.etudiant.CodeFiliere &&
        classe.filiere.dept.code==this.etudiant.CodeDepartement
      ){
        var etu:Etudiant = {
          code:this.etudiant.code,
          nom:this.etudiant.nom,
          prenom:this.etudiant.prenom,
          address:this.etudiant.address,
          email:this.etudiant.email,
          telefone:this.etudiant.telefone,
          classe:classe
        }
        this.listeEtu.push(etu);
        console.log("Liste des etudiant", this.listeEtu);
        this._router.navigate(['/etudiants']);
        return;

      }
      console.log("Condition non remplis");

    }
  }
annuler(){
    console.log("save annuler");
  this._router.navigate(['/Accueil']);

}


}
