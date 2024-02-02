import React, { useState } from 'react';
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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { findAllAnnonce } from '../../service/Utilisateur.service';
import { ApiResponse } from '../../../shared/types/Response';
import { Annonce } from '../../../shared/types/creation-annonce-types';
interface ListAnnonceState{
  tab : string;
  annonces : Annonce[]
}
const initialState : ListAnnonceState = {
  tab : "0",
  annonces : []
}
const ListAnnonceComponent: React.FC = () => {
  const [state, setState] = useState(initialState);
  findAllAnnonce()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            annonces: response.data,
            loading: false,
          }));
        } else {
          setState((state) => ({
            ...state,
            loading: false,
            openError: true,
            errorMessage: response.err,
          }));
        }
      })
      .catch((err) => {
        console.error(err);
        let errorMessage = "";
        if (
          !err.response?.data.err ||
          err.response?.data.err == "" ||
          err.response?.data.err == null
        ) {
          errorMessage = getErrorMessage(err.code);
        } else {
          errorMessage = err.response.data.err;
        }
        console.log("etoo");

        setState((state) => ({
          ...state,
          loading: false,
          openError: true,
          errorMessage: errorMessage,
        }));
      });
  const handleTabClick = (tab: string) => {
    setState({ tab });
  };
  return (
    <>
      <div className="list-title">
        <h1>Vos annonces</h1>
        <div className="progress-choice">
        <div className={`en-attente choice ${state.tab === "1" ? 'choice-active' : ''}`} onClick={() => handleTabClick("1")}></div>
          <div className={`publie choice ${state.tab === "2" ? 'choice-active' : ''}`} onClick={() => handleTabClick("2")}></div>
          <div className={`vendu choice ${state.tab === "3" ? 'choice-active' : ''}`} onClick={() => handleTabClick("3")}></div>
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
              <CheckCircleOutlineIcon />
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>
    </>
  );
};

export default ListAnnonceComponent;
