export interface StepCreationAnnonceProps{
    onClickFunc: (newValue: string) => void;
}
export interface Utilisateur{
    id: number,
    nom: string, 
    prenom: string
}
export interface VerificationAnnonceProps{
    onClickFunc: (value:string)=>void;
    annonce: Annonce;
    marque: Marque;
  }
export interface Etat{
    id: number, 
    nom: string, 
    valeur: number
}
export interface Couleur{
    id: number,
    nom: string,
    hexa: string
}
export interface Modele{
    id: number, 
    nom: string
}
export interface Marque{
    id: number, 
    nom: string
}
export interface BoiteVitesse{
    id: number, 
    nom: string
}
export interface Energie{
    id: number, 
    nom: string
}
export interface Voiture{
    id: number, 
    consommation: number, 
    kilometrage: number,
    etat: number,
    Etat: Etat,
    couleur: Couleur, 
    modele: Modele, 
    energie: Energie,
    boiteVitesse: BoiteVitesse
    idModele: number, 
    idCouleur: number, 
    idBoiteVitesse: number, 
    idEnergie: number
}
export interface Annonce{
    id: number, 
    reference: string, 
    description: string, 
    status: number,
    dateCreation: Date, 
    prix: number, 
    commission: number, 
    nbVues: number, 
    utilisateur: Utilisateur, 
    voiture: Voiture, 
    idUtilisateur: number
}