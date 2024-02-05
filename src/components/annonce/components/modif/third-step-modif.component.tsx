import { IonAlert, IonLoading, IonToast } from "@ionic/react";
import { Alert } from "@mui/material";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { getErrorMessage } from "../../../../shared/service/api-service";
import { Annonce, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import { ApiResponse } from "../../../../shared/types/Response";
import { estimate } from "../../../service/Add-annonce.service";
import "../../container/modif/modif.css"
interface ThirdStepProps{
    onClickFunc:(value:string)=>void;
    annonce: Annonce;
    handlePriceChange:(newvlue:number)=>void;
    estime: number;
    handleEstimationChange: (value:number)=>void;
    
}
interface ThirdStepState{
    loading:number;
    prixClasse: string;
    prixValid: number;
    error: string|null;
}
const initialState:ThirdStepState={
    loading: 0,
    prixClasse: "",
    prixValid: 2,
    error: null
}
const ThirdStepAnnonceCreation: React.FC<ThirdStepProps> = (props : ThirdStepProps) => {
    const [state,setState] = useState<ThirdStepState>(initialState);
    const handlePriceInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const newvalue  = parseFloat(e.target.value);
        if(isNaN(newvalue) || newvalue==0.0 || newvalue<0){
            props.handlePriceChange(0);
            setState((prevState)=>({
                ...prevState,
                prixClasse:"warning",
                prixValid:0
            }))
        }
        else{
            props.handlePriceChange(newvalue);
            setState((prevState)=>({
                ...prevState,
                prixClasse:"",
                prixValid:2
            }))
        }
    }
    const handlePriceEstimatedChange = ()=>{
        setState((prevState)=>({
            ...prevState,
            prixClasse:"",
            prixValid:2
        }))
        props.handlePriceChange(props.estime);
    }
    const handleEstimate = ()=>{
        setState((prevState)=>({
            ...prevState, 
            loading:1,
        }));
        
        setTimeout(() => {
        estimate(props.annonce.voiture)
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          if(response.data){
            props.handleEstimationChange(response.data.prix);
            setState((prevState)=>({
                ...prevState, 
                loading:2,
            }));
        }   
        else{
            setState((prevState)=>({
                ...prevState, 
                loading:2,
                error: 'Nous n\'avons pas pu estimé la valeur de votre voiture'
            }));
        }
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
            
            
          }, 3000);
    };
    const next = ()=>{
        if(state.prixValid==0){
            setState((prevState)=>({
                ...prevState,
                prixClasse:"warning",
                prixValid:-1
            }))
        }
        if(state.prixValid==2){
            props.onClickFunc("4");
        }
    }
    const setPrixNonValid = ()=>{
        setState((prevState)=>({
            ...prevState,
            prixClasse:"warning",
            prixValid:0
        }))
    }
    const setPrixValid = ()=>{
        setState((prevState)=>({
            ...prevState,
            prixClasse:"",
            prixValid:2
        }));
        props.onClickFunc("4");
    }
    return (
        <div className="ion-padding">
            {
                        state.prixValid==-1 && 
                        <IonAlert
                            isOpen={true}
                            message="Etes-vous sûr votre voiture sera gratuite?"
                            buttons={[
                                {
                                    text: 'Oui',
                                    role: 'cancel',
                                    handler: () => {
                                      setPrixValid()
                                    },
                                  },
                                {
                                  text: 'Non',
                                  role: 'confirm',
                                  handler: () => {
                                    setPrixNonValid()
                                  },
                                }
                                
                              ]}
                            onDidDismiss={() => setPrixNonValid()}
                        ></IonAlert>
                    }
                <h1 className="form-title" >
                    A combien la vendriez-vous?
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Prix ( MGA )
                        </label>
                        <input className={state.prixClasse} type="text" value={props.annonce.prix} onChange={handlePriceInputChange}/>
                    </div>
                    <div className="or-form" >
                    ---------------- ou ----------------
                    </div>
                    {
                        state.loading==0 && props.estime==0 && 
                        <div className="form-group">
                            <div className="evaluation" onClick={handleEstimate}>Estimer le prix</div>
                        </div>
                    }
                    {state.loading==1 && <div>
                        <IonLoading isOpen={true} message="Estimation..." spinner="circles" /> 
                        <div className="form-group">
                            <div className="evaluation" >Estimer le prix</div>
                        </div>
                    </div>
                    }
                    { (state.loading==2 || props.estime!=0 ) && <div className="evalue">
                        <div className="">
                            Votre voiture est estimée à
                        </div>
                        <div className="price-evalue">
                            {props.estime.toLocaleString('fr-FR', {
                                    useGrouping: true,
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                             MGA
                        </div>
                        <div className="choisir" onClick={handlePriceEstimatedChange} >
                            Choisir ce prix
                        </div>
                    </div>}
                    <div className="ion-button-container">
                        <div className="button-next-form"onClick={() => props.onClickFunc("2")} >Précedent</div>
                        <div className="button-next-form" onClick={() => next()} > Suivant</div>
                    </div>
                </div>
                <IonToast
                    isOpen={!!state.error}
                    message={state.error || ""}
                    duration={3000}
                    onDidDismiss={() => setState({ ...state, error: null })}
                    color="danger"
                ><Alert severity="error">{state.error as string}</Alert>
                </IonToast>
            </div>
    );
}
export default ThirdStepAnnonceCreation;