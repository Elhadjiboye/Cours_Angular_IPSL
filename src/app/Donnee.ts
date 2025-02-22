import {Carte_Etudiant, Departement, Etudiant, MenuResto} from "./ipsl_modele";
import {Classe} from "./ipsl_modele";
import {Filiere} from "./ipsl_modele";
export var  deptDIT: Departement={
  code:"GIT",
  nom:"Genie Informatique et Telecommunication"
};
export var  deptDGC: Departement={
  code:"GEC",
  nom:"Genie Civil"
};
export var  deptDGM: Departement={
  code:"GEM",
  nom:"Genie Electro-mecanique"
};

export var ListeDept: Departement[]=[deptDIT,deptDGC,deptDGM];

export var ing3info: Classe={
  code:"ING3",
  nom:"Ing 3 Informatique",
  filiere:{code:"INF",nom:"Informatique",dept:deptDIT}
}
export var ing3Civil: Classe={
  code:"ING3",
  nom:"Ing 3 Civil",
  filiere:{code:"Civil",nom:"Genie Civil",dept:deptDGC}
}

export var etudiantBoye:Etudiant={
  code:"P31-9",
  nom:"BOYE",
  prenom:"Elhadji",
  address:"Keur Mbaye Fall",
  email:"boyeelhadjiabdou@gmail.com",
  telefone:"772271171",
  classe:ing3Civil
}


export var Listes_etudiants:Etudiant[]=[etudiantBoye,
  {
    code:"P31-10",
    nom:"Sylla",
    prenom:"Abdoulaye",
    address:"Thies",
    email:"sylla@gmail.com",
    telefone:"778892002",
    classe:ing3info
  },
  {
    code:"P31-12",
    nom:"leye",
    prenom:"Mame Khady",
    address:"Diourbel",
    email:"mame@gmail.com",
    telefone:"771213221",
    classe:ing3Civil
  },
  {
    code:"P31-13",
    nom:"mboup",
    prenom:"Mor talla",
    address:"Louga",
    email:"mor@gmail.com",
    telefone:"772123211",
    classe:ing3info
  }
  ]
export var carteBoye:Carte_Etudiant={
  id:29101,
  anneeD_debut:2024,
  date_delivrance: new Date(Date.parse("2024-10-01")),
  etudiant:etudiantBoye,
  payante:false,
}

export const CATEGORIES=["vegetarien","fastfood","senegalais","africain"]
export var MENUs:MenuResto[]=[
  {
    code:"RAP",
    nom:"Riz au Poisson",
    prix:2000,
    categorie:CATEGORIES[2]
  },
  {
    code:"MV",
    nom:"Mafe viande",
    prix:3000,
    categorie:CATEGORIES[2]
  },
  {
    code:"BG",
    nom:"Burger",
    prix:1500,
    categorie:CATEGORIES[1]
  },
  {
    code:"AT",
    nom:"Athiéké",
    prix:2500,
    categorie:CATEGORIES[3]
  },
  {
    code:"SD",
    nom:"Salade et Crudité",
    prix:3500,
    categorie:CATEGORIES[0]
  }
]
