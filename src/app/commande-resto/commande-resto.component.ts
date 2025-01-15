import {Component, OnInit} from '@angular/core';
import {
  FormArray,
  FormArrayName,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {JsonPipe, NgForOf , NgIf , CommonModule} from "@angular/common";
import {MenuResto} from "../ipsl_modele";
import {MENUs} from "../Donnee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-commande-resto',
  standalone: true,
    imports: [
        FormsModule,
        JsonPipe,
      NgIf , CommonModule,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './commande-resto.component.html',
  styleUrl: './commande-resto.component.scss'
})
export class CommandeRestoComponent implements OnInit {

  public constructor(private _router: Router) {
  }

  commandeForm: FormGroup= new FormGroup({
    prenom:new FormControl('', [Validators.required]),
    nom:new FormControl('', [Validators.required]),
    adresse:new FormControl(''),
    telephone:new FormControl('', [Validators.required]),
    commandes:new FormArray([])

  });
  public Somme:number=0



  commander() {
  }

  annuler() {
    this._router.navigate(['/Accueil']);
  }

  ngOnInit(): void {
    for(let _menu of MENUs){

      this.getMenu.push(
      new FormGroup({
        nomMenu:new FormControl(_menu.nom),
        codeMenu:new FormControl(_menu.code),
        prixMenu:new FormControl(_menu.prix),
        descriptionMenu:new FormControl(_menu.description),
        categorieMenu:new FormControl(_menu.categorie),
        selected:new FormControl(false)
      })
      );
    }
  }

  get getMenu():FormArray{
    return this.commandeForm.get("commandes") as FormArray;
  }

  protected readonly MENUs = MENUs;

  selectionneMenu(i: number) {
    const select=this.getMenu.controls[i].get("selected")?.value
    this.getMenu.controls[i].get("selected")?.setValue(!select);
    console.log(this.getMenu.controls[i].get("selected")?.value);
    var PrixRecuperer = this.getMenu.controls[i].get("prixMenu")?.value;

    if(!select){
      this.Somme+=PrixRecuperer
    }else {
      this.Somme-=PrixRecuperer;
    }
    console.log("Prix total mise a jour ",this.Somme);
  }


}
