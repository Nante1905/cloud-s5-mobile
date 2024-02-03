import {
  IonItem,
} from '@ionic/react';
import "./details-annonce.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import 'swiper/css/scrollbar';

import { Navigation } from 'swiper/modules';
import Caracteristique from './caracteristique-annonce.component';
import { Annonce, DetailAnnonce, Photo } from '../../../shared/types/details-annonce-type';
import { useEffect, useState } from 'react';
import { ApiResponse } from '../../../shared/types/Response';
import { getErrorMessage } from '../../../shared/service/api-service';
import { getById } from '../../service/annonce.service';
interface  DetailsAnnonceProps{
  id_annonce: number
}
interface DetaislAnnonceState{
  annonce : Annonce
}
const initialState : DetaislAnnonceState = {
  annonce : {
      id: 0,
      reference: "",
      description: "",
      status: 0,
      dateCreation: "",
      prix: 0,
      commission: 0,
      nbVues: 0,
      idUtilisateur: 0,
      utilisateur: {
        id: 0,
        nom: "",
        prenom: "",
        dateInscription: "",
        adresse: ""
      },
      voiture: {
        id: 0,
        consommation: 0,
        kilometrage: 0,
        etat: 0,
        couleur: {
          id: 0,
          nom: "",
          hexa: ""
        },
        modele: {
          id: 0,
          nom: "",
          nbPlace: 0,
          nbPorte: 0,
          anneeSortie: 0,
          categorie: {
            id: 0,
            nom: ""
          },
          marque: {
            id: 0,
            nom: "",
            logo: ""
          }
        },
        vitesse: {
          id: 0,
          nom: ""
        },
        energie: {
          id: 0,
          nom: ""
        }
      },
      idVoiture: 0,
      photos: [],
      favori: false
    }
}



const DetailsAnnonce: React.FC<DetailsAnnonceProps> = ( props ) => {
  const [state, setState] = useState(initialState);
  console.log("id annonce" ,  props.id_annonce );
    useEffect(() => { 
      getById(props.id_annonce)
        .then((res) => {
          const response: ApiResponse = res.data;
          if (response.ok) {
            console.log( "tena ok" );
            console.log( response );
            setState((state) => ({
              ...state,
              annonce: response.data,
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
     } , []); 
     console.log("annonce");
     console.log( state.annonce );
  
  return (
    <>
      <IonItem>
        <Swiper
          pagination={{ clickable: true }}
          scrollbar={{ draggable: false }}
          spaceBetween={100}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={true}
        >
          {state.annonce &&
            state.annonce.photos.map((photo: Photo, index: number) => (
              <SwiperSlide key={index}>
                <img className="img-caroussel" src={photo.url} alt={`Photo ${index}`} />
              </SwiperSlide>
            ))}
        </Swiper>
      </IonItem>
      {state.annonce && <Caracteristique annonce={state.annonce} />}
    </>
  );
};
  
  export default DetailsAnnonce;