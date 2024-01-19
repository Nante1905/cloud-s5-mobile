import {
    IonItem,
  } from '@ionic/react';
  import "./connect.component.css";
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
import Caracteristique from '../../../details-annonce/components/caracteristique-annonce.component';
  
const ConnectComponent : React.FC = () => {
    return (
        <>
            <IonItem >
                    <div className="title-login" >
                            <h1>
                                Bienvenue sur la plateforme VV
                            </h1>
                    </div>
              </IonItem>
              <div className="ion-padding">
                <h1 className="form-title" >
                        Connectez vous
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Email
                        </label>
                        <input type="mail"   />
                    </div>
                    <div className="form-group">
                        <label>
                            Mot de passe 
                        </label>
                        <input type="password"   />
                    </div>
                    <div className="form-submit">
                        Se connecter
                    </div>
                </div>
                <div className="inscription" >
                    Pas encore de compte ?<IonItem className="text-inscription" routerLink="/inscription" >
                        Inscrivez vous
                    </IonItem>
                </div>
            </div>
        </>
    );
};

export default ConnectComponent;