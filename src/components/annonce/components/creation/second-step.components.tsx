import { IonCol, IonGrid, IonItem, IonRefresher, IonRefresherContent, IonRow, IonToast, RefresherEventDetail } from "@ionic/react";
import { Annonce, BoiteVitesse, Energie, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css";
import { BVSimpleDialog, EnergieSimpleDialog } from "../../../../shared/hooks/SimpleDialog";
import { Item, transformListToItemList } from "../../../../shared/types/item";
import { ChangeEvent, useEffect, useState } from "react";
import { Alert, Button } from "@mui/material";
import { getAllBV, getAllEnergie } from "../../../service/Add-annonce.service";
import { getErrorMessage } from "../../../../shared/service/api-service";
import { ApiResponse } from "../../../../shared/types/Response";
interface SecondStepState{
    open : boolean,
    type : string,
    dialogTitle: string,
    items : Item[],
    energieClasse: string, 
    bvClasse: string, 
    kmClasse:string,
    consoClasse:string
    listeBoiteVitesse: BoiteVitesse[], 
    listeEnergie: Energie[],
    error: string | null
}
interface SecondStepProps{
    onClickFunc: (newValue: string)=>void;
    handleEnergieChange: (newValue: Energie)=>void;
    handleBoiteVitesseChange: (newValue: BoiteVitesse)=> void;
    handleKilometrageChange: (newValue: number)=> void;
    handleConsommationChange: (newValue:number)=> void;
    annonce: Annonce
}
const initialState: SecondStepState = {
    open: false,
    type: "",
    dialogTitle: "",
    items: [],
    energieClasse: "",
    bvClasse: "",
    kmClasse: '',
    consoClasse: '',
    listeBoiteVitesse: [
        
    ],
    listeEnergie: [
        
    ],
    error:null
}
const SecondStepAnnonceCreation: React.FC<SecondStepProps> = (props : SecondStepProps) => {
    const [state, setState] = useState(initialState);
    const fetchData = ()=>{
        getAllBV()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listeBoiteVitesse: response.data,
          }));
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
      getAllEnergie()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listeEnergie: response.data,
          }));
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
    useEffect(()=>{
        fetchData()
    },[]);
    const handleRefresh = (event: CustomEvent<RefresherEventDetail>)=>{
        setTimeout(() => {
            fetchData();
            event.detail.complete();
          }, 2000);
    }
    const handleClickOpen = (type: string) => {
        setState(prevState => ({
            ...prevState,
            open: true,
            type: type
        }));
    };

    const handleEnergieClose = (item: Energie|null)=>{
        setState(prevState => ({
            ...prevState,
            open: false
        }));
        if (item) {
            props.handleEnergieChange(item);
            setState((prevState)=>({
                ...prevState,
                energieClasse:""
            }))
        }
    }
    const handleBVClose = (item: BoiteVitesse|null)=>{
        setState(prevState => ({
            ...prevState,
            open: false
        }));
        if (item) {
            props.handleBoiteVitesseChange(item);
            setState((prevState)=>({
                ...prevState,
                bvClasse:""
            }))
        }
    }
    const next = ()=>{
        if(props.annonce.voiture.energie.id==0){
            setState((prevState)=>({
                ...prevState,
                energieClasse:"error"
            }));
        };
        if(props.annonce.voiture.boiteVitesse.id==0){
            setState((prevState)=>({
                ...prevState,
                bvClasse:"error"
            }))
        }
        if(props.annonce.voiture.kilometrage==0){
            setState((prevState)=>({
                ...prevState,
                kmClasse:"error"
            }))
        }
        if(props.annonce.voiture.consommation==0){
            setState((prevState)=>({
                ...prevState,
                consoClasse:"error"
            }))
        }
        if(props.annonce.voiture.consommation!=0 && props.annonce.voiture.kilometrage!=0 && props.annonce.voiture.boiteVitesse.id!=0 && props.annonce.voiture.energie.id!=0 ){
            props.onClickFunc("3");
        }
    }
    const handleKilometrageChange = (e:  ChangeEvent<HTMLInputElement>) => {
        const newvalue  = parseFloat(e.target.value);
        console.log(newvalue);
        
        if(isNaN(newvalue) || newvalue==0.0 || newvalue<0){
            props.handleKilometrageChange(0);
            setState((prevState)=>({
                ...prevState,
                kmClasse:"error"
            }))
        }
        else{
            props.handleKilometrageChange(newvalue);
            setState((prevState)=>({
                ...prevState,
                kmClasse:""
            }))
        }
    };
    const handleConsommationChange = (e:  ChangeEvent<HTMLInputElement>) => {
        const newvalue  = parseFloat(e.target.value);
        if(isNaN(newvalue) || newvalue==0.0 || newvalue<0){
            props.handleConsommationChange(0);
            setState((prevState)=>({
                ...prevState,
                consoClasse:"error"
            }))
        }
        else{
            props.handleConsommationChange(newvalue);
            setState((prevState)=>({
                ...prevState,
                consoClasse:""
            }))
        }
    };

    return (
        <div className="ion-padding">
            
                <h1 className="form-title" >
                    Plus de détails
                </h1>
                <div className="form-login">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
                    <div className="form-group">
                        <label>
                            Energie
                        </label>
                        <Button className={state.energieClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('energie')}>
                        {props.annonce.voiture.energie.nom}
                    </Button>
                    <EnergieSimpleDialog
                        open={state.open && state.type === 'energie'}
                        onClose={handleEnergieClose}
                        items={state.listeEnergie}
                        title='Veuillez sélectionner une énergie'
                    />
                    </div>
                    <div className="form-group">
                        <label>
                            Boite de vitesse
                        </label>
                        <Button  className={state.bvClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('bv')}>
                        {props.annonce.voiture.boiteVitesse.nom}
                        </Button>
                        <BVSimpleDialog
                            open={state.open && state.type === 'bv'}
                            onClose={handleBVClose}
                            items={state.listeBoiteVitesse}
                            title='Veuillez sélectionner une boîte de vitesse'
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Consommation
                        </label>
                        <input className={state.consoClasse}  type="number" value={props.annonce.voiture.consommation==0?'':props.annonce.voiture.consommation} placeholder={'0'} onChange={handleConsommationChange} step=".01"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Kilometrage
                        </label>
                        <input className={state.kmClasse}  type="number" value={props.annonce.voiture.kilometrage==0?'':props.annonce.voiture.kilometrage} placeholder='0' onChange={handleKilometrageChange} step=".01"/>
                    </div>

                    <div className="ion-button-container">
                        <div className="button-next-form"  onClick={() => props.onClickFunc("1")} >Précedent</div>
                        <div className="button-next-form" onClick={() => next()} >Suivant</div>
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
export default SecondStepAnnonceCreation;