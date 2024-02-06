import { Annonce as DetailsAnnonce } from "../types/details-annonce-type";
import { Annonce as CreationAnnonce } from "../types/creation-annonce-types";
import { AnnonceInput } from "../types/annonce-input-type";

export function convertirAnnonce(detailsAnnonce: DetailsAnnonce): CreationAnnonce {
  return {
    id: detailsAnnonce.id,
    reference: detailsAnnonce.reference,
    description: detailsAnnonce.description,
    status: detailsAnnonce.status,
    dateCreation: new Date(detailsAnnonce.dateCreation), // Convertir en objet Date
    prix: detailsAnnonce.prix,
    commission: detailsAnnonce.commission,
    nbVues: detailsAnnonce.nbVues,
    utilisateur: detailsAnnonce.utilisateur,
    voiture: {
      id: detailsAnnonce.voiture.id,
      consommation: detailsAnnonce.voiture.consommation,
      kilometrage: detailsAnnonce.voiture.kilometrage,
      etat: detailsAnnonce.voiture.etat,
      Etat: { id : 1 , nom : "Etat moyen" , valeur : 5 },
      couleur: detailsAnnonce.voiture.couleur,
      modele: detailsAnnonce.voiture.modele,
      energie: detailsAnnonce.voiture.energie,
      boiteVitesse: detailsAnnonce.voiture.vitesse,
      idModele: detailsAnnonce.voiture.modele.id,
      idCouleur: detailsAnnonce.voiture.couleur.id,
      idBoiteVitesse: detailsAnnonce.voiture.vitesse.id,
      idEnergie: detailsAnnonce.voiture.energie.id
    },
    idUtilisateur: detailsAnnonce.utilisateur.id,
    medias: detailsAnnonce.photos.map(photo => ({
      url: photo.url
    })),
    marque: detailsAnnonce.voiture.modele.marque
  };
}



export function convertirAnnonceInverse(creationAnnonce: CreationAnnonce): DetailsAnnonce {
  return {
    id: creationAnnonce.id,
    reference: creationAnnonce.reference,
    description: creationAnnonce.description,
    status: creationAnnonce.status,
    dateCreation: creationAnnonce.dateCreation.toISOString(), // Convertir en chaîne de caractères ISO
    prix: creationAnnonce.prix,
    commission: creationAnnonce.commission,
    nbVues: creationAnnonce.nbVues,
    utilisateur: creationAnnonce.utilisateur,
    voiture: {
      id: creationAnnonce.voiture.id,
      consommation: creationAnnonce.voiture.consommation,
      kilometrage: creationAnnonce.voiture.kilometrage,
      etat: creationAnnonce.voiture.etat,
      couleur: creationAnnonce.voiture.couleur,
      modele: creationAnnonce.voiture.modele,
      energie: creationAnnonce.voiture.energie,
      vitesse: creationAnnonce.voiture.boiteVitesse,
      photos: creationAnnonce.medias.map(photo => ({
        url: photo.url
      })), 
    },
    idUtilisateur: creationAnnonce.idUtilisateur,
    photos: creationAnnonce.medias.map(media => ({ url: media.url })), 
    favori: false,
  };
}

export function convertCreationAnnonceToAnnonceInput(creationAnnonce: CreationAnnonce): AnnonceInput {
  return {
    reference : creationAnnonce.reference,
    description: creationAnnonce.description,
    status: creationAnnonce.status,
    prix: creationAnnonce.prix,
    commission: creationAnnonce.commission,
    nbVues: creationAnnonce.nbVues,
    idUtilisateur: creationAnnonce.idUtilisateur,
    voiture: {
      id : creationAnnonce.voiture.id,
      consommation: creationAnnonce.voiture.consommation,
      kilometrage: creationAnnonce.voiture.kilometrage,
      etat: creationAnnonce.voiture.etat,
      idCouleur: creationAnnonce.voiture.idCouleur,
      idModele: creationAnnonce.voiture.idModele,
      idBoiteVitesse: creationAnnonce.voiture.idBoiteVitesse,
      idEnergie: creationAnnonce.voiture.idEnergie,
    },
  };
}