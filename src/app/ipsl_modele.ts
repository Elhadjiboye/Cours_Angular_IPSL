export interface Departement {
  code:String;
  nom:String;
  description?:String;
}
export interface Filiere{
  code:String;
  nom:String;
  description?:String;
  dept:Departement;
}
export interface Classe {
  code:String;
  nom:String;
  description?:String;
  filiere:Filiere;
}
export interface Etudiant{
  code:String;
  nom:String;
  prenom:String;
  address:String;
  telefone:String;
  email:String;
  classe:Classe;
}
export interface Carte_Etudiant{
  id:Number;
  date_delivrance:Date;
  anneeD_debut:Number;
  etudiant:Etudiant;
  payante:Boolean;
}
