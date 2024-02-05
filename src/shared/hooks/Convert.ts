import { Annonce as DetailsAnnonce } from "../types/details-annonce-type";
import { Annonce as CreationAnnonce } from "../types/creation-annonce-types";

function convertirAnnonce(detailsAnnonce: DetailsAnnonce): CreationAnnonce {
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
      Etat: detailsAnnonce.voiture.Etat,
      couleur: detailsAnnonce.voiture.couleur,
      modele: detailsAnnonce.voiture.modele,
      energie: detailsAnnonce.voiture.energie,
      boiteVitesse: detailsAnnonce.voiture.vitesse.nom,
      idModele: detailsAnnonce.voiture.modele.id,
      idCouleur: detailsAnnonce.voiture.couleur.id,
      idBoiteVitesse: detailsAnnonce.voiture.boiteVitesse.id,
      idEnergie: detailsAnnonce.voiture.energie.id
    },
    idUtilisateur: detailsAnnonce.idUtilisateur,
    medias: detailsAnnonce.photos.map(photo => ({
      blob: photo.url
    })),
    marque: detailsAnnonce.marque
  };
}
