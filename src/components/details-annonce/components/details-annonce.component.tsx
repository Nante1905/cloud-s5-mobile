import { useState } from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
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

import { Navigation, Pagination } from 'swiper/modules';

const DetailsAnnonce: React.FC = () => {
    return (
        <IonPage style={{color:"#ffff"}} id="view-message-page">
            <IonButtons className='button-back' 
            slot="start">
              <IonBackButton  style={{color:"#ffff"}} text="" defaultHref="/annonce"></IonBackButton>
            </IonButtons>
  
        <IonContent fullscreen>
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
                    <SwiperSlide><img className="img-caroussel" src={"tesla.jpg"} /></SwiperSlide>
                    <SwiperSlide><img className="img-caroussel" src={"voiture2.jpg"} /></SwiperSlide>
                    <SwiperSlide><img className="img-caroussel" src={"tesla.jpg"} /></SwiperSlide>
                    </Swiper>
              </IonItem>
  
              <div className="ion-padding">
              <div className="annonce" >
                    <h2 className="car-annonce" >
                        <span className="bold" >Annonce n°:</span> 123E2
                    </h2>
                    <h2 className="car-annonce" >
                        <span className="bold" >Du:</span> 2024-01-01
                    </h2>
                </div>
                <h1 className="car-name" >Mercedes Benz - E class AMG</h1>
                <h2 className="car-caracteristique" >
                    <span  className="semi-bold" >Marque :</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Modèle :</span> 2024-01-01
                </h2 >
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Kilometrage :</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Consommation:</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Vitesse :</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Couleur :</span> 2024-01-01
                </h2>
                <p className="car-caracteristique" >
                <span className="semi-bold" >Description : </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="modif-button" >
                Modif
              </div>
              </div>

            </>
        </IonContent>
      </IonPage>
    );
  };
  
  export default DetailsAnnonce;