import {Departement, Etudiant} from "./ipsl_modele";
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

export var ing1info: Classe={
  code:"ING3",
  nom:"Ing 3 Informatique",
  filiere:{code:"INF",nom:"Informatique",dept:deptDIT}
}

export var etudiantBoye:Etudiant={
  code:"P31-9",
  nom:"BOYE",
  prenom:"Elhadji",
  address:"Keur Mbaye Fall",
  email:"boyeelhadjiabdou@gmail.com",
  telefone:"772271171",
  classe:ing1info
}


export var Listes_etudiants:Etudiant[]=[etudiantBoye,
  {
    code:"P31-10",
    nom:"Sylla",
    prenom:"Abdoulaye",
    address:"Thies",
    email:"sylla@gmail.com",
    telefone:"778892002",
    classe:ing1info
  },
  {
    code:"P31-12",
    nom:"leye",
    prenom:"Mame Khady",
    address:"Diourbel",
    email:"mame@gmail.com",
    telefone:"771213221",
    classe:ing1info
  },
  {
    code:"P31-13",
    nom:"mboup",
    prenom:"Mor talla",
    address:"Louga",
    email:"mor@gmail.com",
    telefone:"772123211",
    classe:ing1info
  },


  ]
