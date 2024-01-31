import { IonButton, IonCol, IonGrid, IonItem, IonLoading, IonRow } from "@ionic/react";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { Annonce, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css"
interface ThirdStepProps{
    onClickFunc:(value:string)=>void;
    annonce: Annonce;
    handlePriceChange:(newvlue:number)=>void;
    estime: number;
    handleEstimationChange: (value:number)=>void;
}
interface ThirdStepState{
    loading:number
}
const initialState:ThirdStepState={
    loading:0
}
const ThirdStepAnnonceCreation: React.FC<ThirdStepProps> = (props : ThirdStepProps) => {
    const [state,setState] = useState<ThirdStepState>(initialState);
    const handlePriceInputChange = (e:ChangeEvent<HTMLInputElement>)=>{
        const newvalue  = parseFloat(e.target.value);
        if(isNaN(newvalue)){
            props.handlePriceChange(0);
        }
        else{
            props.handlePriceChange(newvalue);
        }
    }
    const handlePriceEstimatedChange = ()=>{
        props.handlePriceChange(props.estime);
    }
    const handleEstimate = ()=>{
        setState((prevState)=>({
            ...prevState, 
            loading:1,
        }));
        
        setTimeout(() => {
            props.handleEstimationChange(10000000);
            setState((prevState)=>({
                ...prevState, 
                loading:2,
            }));
          }, 3000);
    };
    return (
        <div className="ion-padding">
                <h1 className="form-title" >
                    A combien la vendriez-vous?
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Prix
                        </label>
                        <input type="text" value={props.annonce.prix} onChange={handlePriceInputChange}/>
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
                        <div className="button-next-form" onClick={() => props.onClickFunc("4")} > Suivant</div>
                    </div>
                </div>
            </div>
    );
}
export default ThirdStepAnnonceCreation;