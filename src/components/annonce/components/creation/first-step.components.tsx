import { Annonce, Couleur, Etat, Marque, Modele } from "../../../../shared/types/creation-annonce-types";
import { Alert, Button } from "@mui/material";
import { IonAlert, IonButton, IonIcon, IonRefresher, IonRefresherContent, IonToast, RefresherEventDetail } from '@ionic/react';
import { useEffect, useState} from "react";
import { Item } from "../../../../shared/types/item";
import { CouleurSimpleDialog, EtatSimpleDialog, MarqueSimpleDialog, ModeleSimpleDialog } from "../../../../shared/hooks/SimpleDialog";
import { getAllCouleur, getAllEtat, getAllMarque, getAllModele, getModeleByMarque } from "../../../service/Add-annonce.service";
import { ApiResponse } from "../../../../shared/types/Response";
import { getErrorMessage } from "../../../../shared/service/api-service";

interface FirstStepState{
    open : boolean,
    type : string,
    items : Item[],
    marqueClasse: string,
    modeleClasse:string, 
    couleurClasse: string,
    etatClasse: string, 
    listMarque: Marque[],
    listModele: Modele[],
    listEtat: Etat[], 
    listCouleur: Couleur[],
    error: string | null, 
    refresh: number,
    readyModel: boolean ,
    readyMarque: boolean,
    readyEtat: boolean, 
    readyCouleur: boolean 
}
interface FirstStepProps{
    handleMarqueChange: (newValue: Marque) => void;
    handleModeleChange: (newValue: Modele)=> void;
    handleEtatChange: (newValue: Etat)=>void;
    handleCouleurChange:(newValue: Couleur)=>void;
    onClickFunc: (newValue: string) => void;
    annonce: Annonce;
    marque: Marque;
    handleEtatValidChange: (newvalue:number)=>void;
    etatValid: number;
}   
const initialState: FirstStepState = {
  open: false,
  type: "",
  items: [],
  marqueClasse: "",
  modeleClasse: "",
  couleurClasse: "",
  etatClasse: "",
  listMarque: [],
  listModele: [],
  listEtat: [],
  listCouleur: [],
  error: "",
  refresh: 0,
  readyModel: false,
  readyMarque: false,
  readyEtat: false,
  readyCouleur: false
}

const FirstStepAnnonceCreation: React.FC<FirstStepProps> = (props : FirstStepProps) => {
    const [state, setState] = useState(initialState);
    
    const fetchData = ()=>{
      setState((prevState)=>({
        ...prevState, 
        readyMarque:false,
        readyEtat:false,
        readyModel: false, 
        readyCouleur: false
      }));
        getAllMarque()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listMarque: response.data,
            readyMarque: true
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
      getAllModele()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listModele: response.data,
            readyModel: true
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
      getAllEtat()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listEtat: response.data,
            readyEtat: true
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
      getAllCouleur()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listCouleur: response.data,
            readyCouleur: true
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
    useEffect(() => {
        fetchData()
    },[]);
    useEffect(()=>{
      setState((prevState)=>({
        ...prevState, 
        readyModel: false
      }));
        if(props.marque.id!=0){
            getModeleByMarque(props.marque.id)
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listModele: response.data,
            readyModel: true
          }));
          if(response.data.length>0){
            props.handleModeleChange(response.data[0]);
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
      
        }
        
    },[props.marque])
    const handleClickOpen = (type: string) => {
        setState(prevState => ({
            ...prevState,
            open: true,
            type: type,
        }));
    };
    const handleMarqueClose = (item: Marque | null) => {
        setState(prevState => ({
            ...prevState,
            open: false
        }));
        if (item) {
            props.handleMarqueChange(item);
            setState((prevState)=>({
                ...prevState,
                marqueClasse:""
            }))
        }
    }
    const handleModeleClose = (item:Modele|null)=>{
        setState(prevState => ({
            ...prevState,
            open: false
        }));
        if (item) {
            props.handleModeleChange(item);
            setState((prevState)=>({
                ...prevState,
                modeleClasse:""
            }))
        }
    }
    const handleCouleurClose = (item: Couleur|null)=>{
        setState(prevState => ({
            ...prevState,
            open: false
        }));
        if(item){
            props.handleCouleurChange(item);
            setState((prevState)=>({
                ...prevState,
                couleurClasse:""
            }))
        }
    }
    const handleEtatClose = (item: Etat|null)=>{
        setState(prevState => ({
            ...prevState,
            open: false
        }));
        if (item) {
            
            props.handleEtatChange(item);
            let isValid = 2;
            if(item.valeur==0){
                isValid=0;
            }
            setState((prevState)=>({
                ...prevState,
                etatClasse:"",
            }));
            props.handleEtatValidChange(isValid);
        }
    }
    const next = ()=>{
        if(props.marque.id==0){
            setState((prevState)=>({
                ...prevState,
                marqueClasse:"error"
            }))
        }
        if(props.annonce.voiture.modele.id==0){
            setState((prevState)=>({
                ...prevState,
                modeleClasse:"error"
            }))
        }
        if(props.annonce.voiture.couleur.id==0){
            setState((prevState)=>({
                ...prevState,
                couleurClasse:"error"
            }))
        }
        if(props.etatValid==0){
            setState((prevState)=>({
                ...prevState,
               
                etatClasse:"warning"
            }))
            props.handleEtatValidChange(-1);
        }
        if(props.marque.id!=0 && props.annonce.voiture.modele.id != 0  && props.annonce.voiture.couleur.id!=0 && props.etatValid!=0){            
            props.onClickFunc("2");
        }
    };
    const setEtatNonValid = ()=>{
        setState((prevState)=>({
            ...prevState,
            
            etatClasse:"error"
        }));
        props.handleEtatValidChange(0);
    }
    const setEtatValid =()=>{
        setState((prevState)=>({
            ...prevState,
            
        }));
        props.handleEtatValidChange(2);
        next();
    }
    const handleRefresh = (event: CustomEvent<RefresherEventDetail>)=> {
            fetchData();
            event.detail.complete();
    }
    return (
        <div className="ion-padding">
                        
                        <h1 className="form-title" >
                        Caractéristiques générales
                </h1>
                <div className="form-login">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
                    <div className="form-group">
                        
                        <label>
                            Marque
                        </label>
                        <Button className={state.marqueClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('marque')}>
                        {props.marque.nom}
                        </Button>
                    <MarqueSimpleDialog ready={state.readyMarque} onClose={handleMarqueClose} items={state.listMarque} title={"Veuillez sélectionner une marque"} open={state.open && state.type === 'marque'} />
                    </div>
                    
                    <div className="form-group">
                        <label>
                            Modèle
                        </label>
                        <Button className={state.modeleClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('modele')}>
                        {props.annonce.voiture.modele.nom}
                    </Button>
                    
                    <ModeleSimpleDialog ready={state.readyModel}
                        open={state.open && state.type === 'modele'}
                        onClose={handleModeleClose}
                        items={state.listModele}
                        title='Veuillez sélectionner un modèle'
                    />
                    </div>
                    {
                        props.etatValid==-1 && 
                        <IonAlert
                            isOpen={true}
                            message="Etes-vous sûr que l'état de votre voiture sera 0 ?"
                            buttons={[
                                {
                                    text: 'Oui',
                                    role: 'cancel',
                                    handler: () => {
                                      setEtatValid()
                                    }
                                },
                                {
                                  text: 'Non',
                                  role: 'confirm',
                                  handler: () => {
                                    setEtatNonValid()
                                }
                                }
                              ]}
                            onDidDismiss={() => setEtatNonValid()}
                        ></IonAlert>
                    }
                    <div className="form-group">
                        <label>
                            Etat
                        </label>
                        <Button className={state.etatClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('etat')}>
                            {props.annonce.voiture.Etat.nom}
                        </Button>
                        
                        <EtatSimpleDialog ready={state.readyEtat}
                            open={state.open && state.type === 'etat'}
                            onClose={handleEtatClose}
                            items={state.listEtat}
                            title='Veuillez sélectionner un état'
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Couleur
                        </label>
                        <Button className={state.couleurClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('couleur')}>
                            {props.annonce.voiture.couleur.nom}
                        </Button>
                        <CouleurSimpleDialog ready={state.readyCouleur}
                            open={state.open && state.type === 'couleur'}
                            onClose={handleCouleurClose}
                            items={state.listCouleur}
                            title='Veuillez sélectionner une couleur'
                        />
                    </div>
                    <div className="ion-button-container">
                        <div className="button-invalid-form" >Précedent</div>
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
export default FirstStepAnnonceCreation;