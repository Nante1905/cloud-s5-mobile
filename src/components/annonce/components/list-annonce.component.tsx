import React from 'react';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from '@ionic/react';
import './list-annonce.component.css';
import { Link } from 'react-router-dom';
const ListAnnonceComponent: React.FC = () => {
  return (
    <>
      <div className="list-title">
        <h1>Vos annonces</h1>
        <div className="progress-choice">
          <div className="en-attente choice"></div>
          <div className="publie choice"></div>
          <div className="vendu choice"></div>
        </div>
        <div className="progress-choice-text">
          <div className="choice">En attente</div>
          <div className="choice">Publié</div>
          <div className="choice">Vendu</div>
        </div>
      </div>
      <IonList className="list-annonce" lines="none">
        <IonItemSliding>
        <Link style={{textDecoration:"none"}} to="/details">
          <IonItem
           
            className="annonce-content"
            style={{ borderLeft: '10px solid red', background: "rgb( 240 , 240 , 240 )" }}
          >
            <IonThumbnail slot="start">
              <img
                className="card-img"
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              />
            </IonThumbnail>
            <IonCardHeader>
              <IonCardTitle className="card-title">
                Mercedes Benz E class AMG Sport
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="content-card">
              <div className="prix">12 000 000 MGA</div>
              <div className="view">10k</div>
            </IonCardContent>
          </IonItem>
          </Link>
          <IonItemOptions side="end">
            <IonItemOption color="success" expandable>
              OK
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>
    </>
  );
};

export default ListAnnonceComponent;
