import {
    IonInput,
    IonItem, IonToast,
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
import { Redirect } from 'react-router-dom';

import 'swiper/css/scrollbar';
import { useHistory} from 'react-router-dom';
import { Auth } from '../../../../shared/types/Utilisateur';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { connexion } from '../../../service/login.service';
import Alert from '@mui/material/Alert';

interface UtilisateurFormState {
    form: Auth;
    success: string | null;
    error: string | null;
    submitLoading: boolean;
    viewPassword: boolean;
    redirectMessage: boolean;
    redirectToAccueil : boolean;
  }
  
  const initialState: UtilisateurFormState = {
    form: {
      email: "rakotonirinairintsoa0@gmail.com",
      password: "tiavina",
    },
    success: null,
    error: null,
    submitLoading: false,
    viewPassword: false,
    redirectMessage: false,
    redirectToAccueil:false
  };
  
const ConnectComponent : React.FC = () => {
    const [state, setState] = useState<UtilisateurFormState>(initialState);

    const history = useHistory();
    const location = useLocation();

    const handleSubmit = async (event: any) => {
        setState((prevData) => ({ ...prevData, submitLoading: true }));
    
        connexion({ email: state.form.email, password: state.form.password })
          .then((res) => {
            localStorage.setItem("token", res.data.data);
            setState((prevData) => ({ ...prevData, success: res.data.message, submitLoading: false , redirectToAccueil : true }));
            console.log("andhe ahipsh" );
            history.push("/tabs/annonce");
            console.log("avy ahipsh" );
          })
          .catch((err) => {
            setState((prevData) => ({ ...prevData, error: err?.response?.data.err || "Une erreur s'est produite.", submitLoading: false }));
          });
      };
    const redirctAccueil = () => {
        if (state.redirectToAccueil) {
            return <Redirect to="/accueil" />;
        }
    };  
    return (
        <>
            <IonItem >
                    <div className="title-login" >
                            <h1>
                                Bienvenue sur la plateforme VV
                            </h1>
                    </div>
              </IonItem>
              <div className="ion-padding connect">
                <h1 className="form-title" >
                        Connectez vous
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Email
                        </label> 
                        <input type="email"  value={state.form.email} onChange={(e) => setState({ ...state, form: { ...state.form, password:e.target.value! } })}  />
                    </div>
                    <div className="form-group">
                        <label>
                            Mot de passe 
                        </label>
                        <input  type={state.viewPassword ? "text" : "password"}
                        value={state.form.password}
                        onChange={(e) => setState({ ...state, form: { ...state.form, password: e.target.value! } })}
                          />
                    </div>
                    <a 
                    // href="/tabs"
                    className="form-submit" onClick={handleSubmit} >
                        Se connecter
                    </a>
                </div>
                <div className="inscription" >
                    Pas encore de compte ?<IonItem id="text-inscription" routerLink="/inscription" >
                        Inscrivez vous
                    </IonItem>
                </div>
                <IonToast
                    isOpen={!!state.error}
                    message={state.error || ""}
                    duration={3000}
                    onDidDismiss={() => setState({ ...state, error: null })}
                    color="danger"
                ><Alert severity="error">{state.error as string}</Alert>
                </IonToast>
                <IonToast
                    isOpen={!!state.success}
                    message={state.success || ""}
                    duration={3000}
                    onDidDismiss={() => setState({ ...state, success: null })}
                    color="success"
                ><Alert severity="success">{state.success as string}</Alert></IonToast>
                <IonToast
                    isOpen={state.redirectMessage 
                        // || 
                        // !!location.state?.showMessage
                    }
                    message="Veuillez vous connecter pour continuer"
                    duration={3000}
                    onDidDismiss={() => setState({ ...state, redirectMessage: false })}
                    color="warning"
                ></IonToast>
                {redirctAccueil()}
            </div>
        </>
    );
};

export default ConnectComponent;