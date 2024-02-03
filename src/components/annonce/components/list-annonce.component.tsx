import React, { useState , useEffect } from 'react';
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
import { getErrorMessage } from '../../../shared/service/api-service';
import { Annonce } from '../../../shared/types/liste-annonce';
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
  const getColor = ( status : number ) =>{
      if( status < 0 ) return "rgb( 255 , 168 , 0 )";
      if( status == 5 ) return "rgb( 228 , 255 , 60 )";
      if( status == 10 ) return "rgb( 48 , 255 , 56 )";
      return "";
  };
  const changeList = ( url : string ) => {
    findAllAnnonce(url)
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
    console.log( state.annonces );
  }

  useEffect(() => {
      changeList( "/annonces/yours" );
      } , []);
  const handleTabClick = (tab: string) => {
    setState((state) => ({
      ...state,
      tab: tab
    }));
    if (tab == "3") changeList( "/annonces/vendu/moi" );
    if (tab == "2") changeList( "/annonces/valide/moi" );
    if (tab == "1") changeList( "/annonces/nonValide/moi" );

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
      {state.annonces.map((annonce) => (
        <IonItemSliding key={annonce.id}>
          <Link style={{textDecoration:"none"}} to={`/details/${annonce.id}`}>
            <IonItem
              className="annonce-content"
              style={{ borderLeft: `10px solid ${getColor(annonce.status)}`, background: "rgb( 240 , 240 , 240 )" }}
            >
              <IonThumbnail slot="start">
                <img
                  className="card-img"
                  alt="Silhouette of mountains"
                  src={annonce.photos.length != 0 ?annonce.photos[0].url : ""}
                />
              </IonThumbnail>
              <IonCardHeader>
                <IonCardTitle className="card-title">
                  {annonce.marque.nom} {annonce.modele.nom}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="content-card">
                <div className="prix">{annonce.prix} MGA</div>
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
      ))}
    </IonList>

    </>
  );
};

export default ListAnnonceComponent;


