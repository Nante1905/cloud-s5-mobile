import { IonPage, IonButtons, IonBackButton, IonContent, IonToast } from "@ionic/react";
import { SignInReq } from "../../../../shared/types/sign-in.types";
import { Alert } from "@mui/material";
import InscriptionComponent from "../components/inscription.component";
import {useState} from 'react';
import { inscrire } from "../../../service/inscription.service";
import { ApiResponse } from "../../../../shared/types/Response";
import { getErrorMessage } from "../../../../shared/service/api-service";
interface InscriptionState {
    newUser: SignInReq;
    error: string|null;
}
const initialState: InscriptionState = {
    newUser: {
        nom: '',
        prenom:'',
        email:'',
        password:'', 
        adresse:''
    },
    error: null
}
const InscriptionRoot : React.FC = () => {
    const [state, setState] = useState<InscriptionState>(initialState);
    
const saveNewUser = ()=>{
    inscrire(state.newUser)
    .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          console.log("user cree");
        } else {
          setState((state) => ({
            ...state,
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
          error: errorMessage
        }));
      });
}
    const handleNomChange = (newvalue:string)=>{
        setState((state)=>({
            ...state,
            newUser:{
                ...state.newUser,
                nom: newvalue
            }
        }))
    };
    const handlePrenomChange = (newvalue:string)=>{
        setState((state)=>({
            ...state,
            newUser:{
                ...state.newUser,
                prenom: newvalue
            }
        }))
    };
    const handleEmailChange = (newvalue:string)=>{
        setState((state)=>({
            ...state,
            newUser:{
                ...state.newUser,
                email: newvalue
            }
        }))
    }
    const handlePasswordChange = (newvalue:string)=>{
        setState((state)=>({
            ...state,
            newUser:{
                ...state.newUser,
                password: newvalue
            }
        }))
    }
    const handleAdresseChange = (newvalue:string)=>{
        setState((state)=>({
            ...state,
            newUser:{
                ...state.newUser,
                adresse: newvalue
            }
        }))
    }
    return (
        <IonPage style={{color:"#ffff"}} id="view-message-page">
            <IonButtons className='button-back' 
            slot="start">
              <IonBackButton  style={{color:"#ffff"}} text="" defaultHref="/login"></IonBackButton>
            </IonButtons>
            <IonContent fullscreen>
                <InscriptionComponent newUser={state.newUser} handleNomChange={handleNomChange} handlePrenomChange={handlePrenomChange} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleAdresseChange={handleAdresseChange} saveNewUser={saveNewUser}  />
                <IonToast
                    isOpen={!!state.error}
                    message={state.error || ""}
                    duration={3000}
                    onDidDismiss={() => setState({ ...state, error: null })}
                    color="danger"
                ><Alert severity="error">{state.error as string}</Alert>
                </IonToast>
            </IonContent>
        </IonPage>

    );
};

export default InscriptionRoot;