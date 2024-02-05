import {
  IonItem,
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import { ApiResponse } from "../../../../shared/types/Response";
import { saveAnnonce } from "../../../service/Add-annonce.service";
import { useState} from "react";
import { Alert } from "@mui/material";
import { IonToast, IonSpinner } from '@ionic/react';
import 'swiper/css';
import {checkmarkDoneCircleOutline} from 'ionicons/icons';
import 'swiper/css/navigation';

import 'swiper/css/pagination';

import 'swiper/css/scrollbar';

import { Navigation } from 'swiper/modules';
import VerificationCaracteristique from './verification/verification-caracteristique';
import { Annonce, Marque, SaveAnnonceReq, StepCreationAnnonceProps, VerificationAnnonceProps } from '../../../../shared/types/creation-annonce-types';
import { getErrorMessage } from '../../../../shared/service/api-service';

interface LastStepState{
  error: string|null;
  success: string|null;
  loading: boolean;
}
const initialState: LastStepState = {
  error:null,
  success:null,
  loading:false
}
const VerificationAnnonce: React.FC<VerificationAnnonceProps> = ( props : VerificationAnnonceProps ) => {
  const [state,setState] = useState<LastStepState>(initialState);
  const save= ()=>{
    setState((state)=>({
      ...state, 
      loading: true
    }))
    const req: SaveAnnonceReq = {
      description: props.annonce.description,
      prix: props.annonce.prix,
      voiture: props.annonce.voiture, 
      medias: props.annonce.medias
    }
    saveAnnonce(req)
    .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
            setState((state) => ({
                ...state,
                loading:false,
                success: 'Votre annonce a été importée avec succès. Vous serez notifié(e) dès qu\'elle sera validée'
              }));
        } else {
          setState((state) => ({
            ...state,
            loading:false,
            error: response.err,
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
        setState((state) => ({
          ...state,
          loading: false,
          error: errorMessage
        }));
      });
}
  return (
            <>
              <IonItem >
                    <Swiper
                        pagination={{clickable:true}}
                        scrollbar={{draggable:false}}
                        spaceBetween={100}
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={true}
                    >
                    
                    {props.annonce.medias.map((photo, index) => (
                        <SwiperSlide><img className="img-caroussel" src={photo.webViewPath} /></SwiperSlide>
                    ))}
                    </Swiper>
              </IonItem>
                <VerificationCaracteristique save={save} onClickFunc={props.onClickFunc} annonce={props.annonce} marque={props.marque}/>
              <IonToast
              duration={3000}
                    isOpen={!!state.error}
                    message={state.error || ""}
                    color="danger"
                ><Alert severity="error">{state.error as string}</Alert>
            </IonToast>
            <IonToast
                     isOpen={state.loading==true}
                    message="Importation de votre annonce"  color="primary">
                      <Alert severity="info">Importation de votre annonce</Alert>
            </IonToast>
            <IonToast
            duration={4000}
                    isOpen={!!state.success} message={state.success as string} color="success"
                ><Alert severity="success">{state.success}</Alert>
            </IonToast>
            </>
    );
  };
  
  export default VerificationAnnonce;