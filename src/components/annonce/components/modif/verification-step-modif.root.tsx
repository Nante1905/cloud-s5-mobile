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

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import 'swiper/css/scrollbar';

import { Navigation } from 'swiper/modules';
import VerificationCaracteristiqueModif from './verification/verification-caracteristique-modif';
import { VerificationAnnonceProps } from '../../../../shared/types/creation-annonce-types';

const VerificationAnnonceModif: React.FC<VerificationAnnonceProps> = ( props : VerificationAnnonceProps ) => {
  const save = ()=>{
    
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
                        <SwiperSlide><img style={{objectFit : "cover"}} className="img-caroussel" src={photo.url} /></SwiperSlide>
                    ))}
                    </Swiper>
              </IonItem>
                <VerificationCaracteristiqueModif save={save} onClickFunc={props.onClickFunc} annonce={props.annonce} marque={props.marque}/>
            </>
    );
  };
  
  export default VerificationAnnonceModif;