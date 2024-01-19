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

const DetailsAnnonce: React.FC = () => {
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
                    <SwiperSlide><img className="img-caroussel" src={"tesla.jpg"} /></SwiperSlide>
                    <SwiperSlide><img className="img-caroussel" src={"voiture2.jpg"} /></SwiperSlide>
                    <SwiperSlide><img className="img-caroussel" src={"tesla.jpg"} /></SwiperSlide>
                    </Swiper>
              </IonItem>
                <Caracteristique />
            </>
    );
  };
  
  export default DetailsAnnonce;