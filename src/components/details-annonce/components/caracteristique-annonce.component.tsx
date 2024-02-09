import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import './details-annonce.css';
import { Annonce } from '../../../shared/types/details-annonce-type';
import { Link, useHistory} from 'react-router-dom';

interface CaracteristiqueProps {
  annonce: Annonce;
}

const Caracteristique: React.FC<CaracteristiqueProps> = ({ annonce }) => {
  const history = useHistory();
  const redirectToOtherPage = ( id : number ) => {
    console.log( "makato" );
    history.push(`/modif/${id}`);
  };
  return (
    <div className="caracteristique ion-padding">
      <div className="annonce">
        <h2 className="car-annonce">
          <span className="bold">Annonce n°:</span> {annonce.reference}
        </h2>
        <h2 className="car-annonce">
          <span className="bold">Du:</span> {annonce.dateCreation}
        </h2>
      </div>
      <h1 className="car-name">{annonce.voiture.modele.marque.nom} - {annonce.voiture.modele.nom}</h1>
      <h2 className="car-caracteristique">
        <span className="semi-bold">Marque :</span> {annonce.voiture.modele.marque.nom}
      </h2>
      <h2 className="car-caracteristique">
        <span className="semi-bold">Modèle :</span> {annonce.voiture.modele.nom}
      </h2>
      <h2 className="car-caracteristique">
        <span className="semi-bold">Kilométrage :</span> {annonce.voiture.kilometrage}
      </h2>
      <h2 className="car-caracteristique">
        <span className="semi-bold">Consommation :</span> {annonce.voiture.consommation}
      </h2>
      <h2 className="car-caracteristique">
        <span className="semi-bold">Vitesse :</span> {annonce.voiture.vitesse.nom}
      </h2>
      <h2 className="car-caracteristique">
        <span className="semi-bold">Couleur :</span> {annonce.voiture.couleur.nom}
      </h2>
      <p className="car-caracteristique">
        <span className="semi-bold">Description : </span><div dangerouslySetInnerHTML={{ __html: annonce.description }}></div>
      </p>
      {/* <Link to={`/modif/${annonce.id}`}   >
        <ion-button className="modif-button" id="button-modification" > Modifier l'annonce </ion-button>
      </Link> */}
    </div>
  );
};

export default Caracteristique;
