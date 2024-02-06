export interface AnnonceInput {
    reference : string;
    description: string;
    status: number;
    prix: number;
    commission: number;
    nbVues: number;
    idUtilisateur: number;
    voiture: {
      id : number;
      consommation: number;
      kilometrage: number;
      etat: number;
      idCouleur: number;
      idModele: number;
      idBoiteVitesse: number;
      idEnergie: number;
    };
  }