export interface Departement {
  code:string;
  nom:string;
  description?:string;
}
export interface Filiere{
  code:string;
  nom:string;
  description?:string;
  dept:Departement;
}
export interface Classe {
  code:string;
  nom:string;
  description?:string;
  filiere:Filiere;
}
export interface Etudiant{
  code:string;
  nom:string;
  prenom:string;
  address:string;
  telefone:string;
  email:string;
  classe:Classe;
}
export interface EtudiantDTO{
  code:string;
  nom:string;
  prenom:string;
  address:string;
  telefone:string;
  email:string;
  CodeClasse:string;
  CodeDepartement:string;
  CodeFiliere:string;
}
export interface Carte_Etudiant{
  id:Number;
  date_delivrance:Date;
  anneeD_debut:Number;
  etudiant:Etudiant;
  payante:Boolean;
}

export interface MenuResto{
  code:string;
  nom:string;
  prix:number;
  description?:string;
  categorie:string;

}
