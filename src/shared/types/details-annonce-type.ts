export interface DetailAnnonce{
    onClickFunc: (newValue: string) => void;
}

interface Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    dateInscription: string;
    adresse: string;
  }
  
  interface Couleur {
    id: number;
    nom: string;
    hexa: string;
  }
  
  interface Categorie {
    id: number;
    nom: string;
  }
  
  interface Marque {
    id: number;
    nom: string;
    logo: string;
  }
  
  interface Modele {
    id: number;
    nom: string;
    nbPlace: number;
    nbPorte: number;
    anneeSortie: number;
    categorie: Categorie;
    marque: Marque;
  }
  
  interface Vitesse {
    id: number;
    nom: string;
  }
  
  interface Energie {
    id: number;
    nom: string;
  }
  
  interface Voiture {
    id: number;
    consommation: number;
    kilometrage: number;
    etat: number;
    couleur: Couleur;
    modele: Modele;
    vitesse: Vitesse;
    energie: Energie;
  }
  
  export interface Photo {
    url: string;
  }
  
  export interface Annonce {
    id: number;
    reference: string;
    description: string;
    status: number;
    dateCreation: string;
    prix: number;
    commission: number;
    nbVues: number;
    idUtilisateur: number;
    utilisateur: Utilisateur;
    voiture: Voiture;
    idVoiture: number;
    photos: Photo[];
    favori: boolean;
  }
  