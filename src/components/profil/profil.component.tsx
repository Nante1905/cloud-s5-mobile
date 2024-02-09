import { IonItem } from "@ionic/react";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getErrorMessage } from "../../shared/service/api-service";
import { Utilisateur } from "../../shared/types/profil.types";
import { ApiResponse } from "../../shared/types/Response";
import { getUserInfo } from "../service/profil.service";
import firstLetterToUpperCase from "../../shared/hooks/string-helper";
import AppLoaderComponent from "../../shared/loader/app-loader.component";
interface ProfilState {
    utilisateur: Utilisateur,
    error: string, 
    loading: boolean
}
const initialState : ProfilState = {
    utilisateur:{
        nom:'',
        prenom:'',
        adresse:'',
        dateInscription:''
    },
    error:'',
    loading: true
}
const ProfilComponent   : React.FC = () => {
    const [state,setState] = useState<ProfilState>(initialState);
    const history = useHistory();

    useEffect(()=>{
        getUserInfo()
        .then((res) => {
            const response: ApiResponse = res.data;
            console.log(response);
            
            if (response.ok) {
              setState((state) => ({
                ...state,
                utilisateur: response.data,
                loading:false
              }));
            } else {
              setState((state) => ({
                ...state,
                error: response.err,
                loading: false
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
              error: errorMessage
            }));
          });
    },[])
    const disconnect = ()=>{
      localStorage.removeItem("token");
      history.push('/login')
    }
    return (
        <>
            <div className="profile-page"  >
                {/* <div className="title-profile"  >
                    <div >
                            <h1>
                                Profile
                            </h1>
                    </div>
                </div> */}
                <AppLoaderComponent loading={state.loading}>
                <>
                <div className="avatar-profile">
                    <Avatar style={{ fontSize : "50px" , height : "120px" , width : "120px" }} sx={{ bgcolor: '#3DC2BC' }}>{firstLetterToUpperCase( state.utilisateur.prenom )+firstLetterToUpperCase( state.utilisateur.nom )}</Avatar>
                    <h1>
                        {state.utilisateur.nom} {state.utilisateur.prenom}
                    </h1>
                </div>
                <div className="information-page" >
                    <div className="info-groupe" >
                        <div className="label-info" >Nom</div>
                        <div className="info-input" >
                        {state.utilisateur.nom} {state.utilisateur.prenom}
                        </div>
                    </div>
                    
                    <div className="info-groupe" >
                        <div className="label-info" >Adresse</div>
                        <div className="info-input" >
                        {state.utilisateur.adresse}
                        </div>
                    </div>
                    <div className="info-groupe" >
                        <div className="label-info" >Membre depuis</div>
                        <div className="info-input" >
                            {new Date(state.utilisateur.dateInscription).toLocaleString('fr-FR',{ year: 'numeric', month: 'long' })}
                        </div>
                    </div>
                    
                </div>
                <div className="deconnexion" onClick={disconnect}>
                    Se déconnecter
                </div>
                    </>
                </AppLoaderComponent>
                            </div>
        </>
    );
};
export default ProfilComponent;