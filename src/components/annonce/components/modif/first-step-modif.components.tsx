import { Annonce, Couleur, Etat, Marque, Modele } from "../../../../shared/types/creation-annonce-types";
import { Alert, Button } from "@mui/material";
import { IonAlert, IonRefresher, IonRefresherContent, IonToast, RefresherEventDetail } from '@ionic/react';
import { useEffect, useState} from "react";
import { Item } from "../../../../shared/types/item";
import { CouleurSimpleDialog, EtatSimpleDialog, MarqueSimpleDialog, ModeleSimpleDialog } from "../../../../shared/hooks/SimpleDialog";
import { getAllCouleur, getAllEtat, getAllMarque, getAllModele, getModeleByMarque } from "../../../service/Add-annonce.service";
import { ApiResponse } from "../../../../shared/types/Response";
import { getErrorMessage } from "../../../../shared/service/api-service";
import AppLoaderComponent from "../../../../shared/loader/app-loader.component";

interface FirstStepState{
    open : boolean,
    type : string,
    items : Item[],
    marqueClasse: string,
    modeleClasse:string, 
    couleurClasse: string,
    etatValid: number,
    etatClasse: string, 
    listMarque: Marque[],
    listModele: Modele[],
    listEtat: Etat[], 
    listCouleur: Couleur[],
    error: string | null, 
    refresh: number,
    loading : boolean
}
interface FirstStepProps{
    handleMarqueChange: (newValue: Marque) => void;
    handleModeleChange: (newValue: Modele)=> void;
    handleEtatChange: (newValue: Etat)=>void;
    handleCouleurChange:(newValue: Couleur)=>void;
    onClickFunc: (newValue: string) => void;
    annonce: Annonce;
}   
const initialState: FirstStepState = {
    open: false,
    type: "",
    items: [],
    marqueClasse: "",
    modeleClasse: "",
    couleurClasse: "",
    etatValid: 0,
    etatClasse: "",
    listMarque: [
        { id: 1, nom: 'Toyota Camry', logo: 'red.png' },
        { id: 2, nom: 'Honda Accord', logo: 'red.png' },
        { id: 3, nom: 'Ford Mustang', logo: 'red.png' },
    ],
    listModele: [
        { id: 1, nom: 'modèle 1' },
        { id: 2, nom: 'modèle 2' },
        { id: 3, nom: 'modèle 3' }
    ],
    listEtat: [
        { id: 1, nom: 'etat 1', valeur: 1 },
        { id: 2, nom: 'etat 2', valeur: 1 },
        { id: 3, nom: 'etat 3', valeur: 1 }
    ],
    listCouleur: [
        { id: 1, nom: 'couleur 1', hexa: 'red' },
        { id: 2, nom: 'couleur 2', hexa: 'red' },
        { id: 3, nom: 'couleur 3', hexa: 'red' }
    ],
    error: "",
    refresh: 0,
    loading : true
}

const FirstStepAnnonceCreation: React.FC<FirstStepProps> = (props : FirstStepProps) => {
    // console.log( "l'annonce " , props.annonce );
    const [state, setState] = useState(initialState);
    const fetchData = ()=>{
      setState((state) => ({
        ...state,
        etatValid : 2
      }));
        getAllMarque()
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listMarque: response.data,
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
            listCouleur: response.data
          }));
          setState((state) => ({
            ...state,
            loading : false
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
        if(props.annonce.marque.id!=0){
            getModeleByMarque(props.annonce.marque.id)
      .then((res) => {
        const response: ApiResponse = res.data;
        if (response.ok) {
          setState((state) => ({
            ...state,
            listModele: response.data,
          }));
          if(response.data){
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
        
    },[props.annonce.marque])
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
        console.log( "item marque 2" , item );
        if (item != null && item != undefined) {
          console.log( "item marque " , item );
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
        if (item) {
            setState(prevState => ({
                ...prevState,
                open: false
            }));
            props.handleEtatChange(item);
            let isValid = 2;
            if(item.id==0){
                isValid=0;
            }
            setState((prevState)=>({
                ...prevState,
                etatClasse:"",
                etatValid:isValid
            }))
        }
    }
    const next = ()=>{
        if(props.annonce.marque.id==0){
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
        if(state.etatValid==0){
            setState((prevState)=>({
                ...prevState,
                etatValid:-1,
                etatClasse:"warning"
            }))
        }
        if(props.annonce.marque.id!=0 && props.annonce.voiture.modele.id != 0  && props.annonce.voiture.couleur.id!=0 && state.etatValid!=0){            
            props.onClickFunc("2");
        }
    };
    const setEtatNonValid = ()=>{
        setState((prevState)=>({
            ...prevState,
            etatValid:0,
            etatClasse:"error"
        }))
    }
    const setEtatValid =()=>{
        setState((prevState)=>({
            ...prevState,
            etatValid:2
        }));
        next();
    }
    const handleRefresh = (event: CustomEvent<RefresherEventDetail>)=> {
        setTimeout(() => {
            fetchData();
            event.detail.complete();
          }, 2000);
    }
    return (
        <div className="ion-padding">
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
              <AppLoaderComponent loading={state.loading}>
                    <h1 className="form-title" >
                            Caractéristiques générales
                    </h1>
                    <div className="form-login">
                        <div className="form-group">
                            
                            <label>
                                Marque
                            </label>
                            <Button className={state.marqueClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('marque')}>
                            {props.annonce.marque.nom}
                            </Button>
                
                        
                        <MarqueSimpleDialog onClose={handleMarqueClose} items={state.listMarque} title={"Veuillez sélectionner une marque"} open={state.open && state.type === 'marque'} />
                        </div>
                        
                        <div className="form-group">
                            <label>
                                Modèle
                            </label>
                            <Button className={state.modeleClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen('modele')}>
                            {props.annonce.voiture.modele.nom}
                        </Button>
                        
                        <ModeleSimpleDialog
                            open={state.open && state.type === 'modele'}
                            onClose={handleModeleClose}
                            items={state.listModele}
                            title='Veuillez sélectionner un modèle'
                        />
                        </div>
                        {
                            state.etatValid==-1 && 
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
                            
                            <EtatSimpleDialog 
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
                            <CouleurSimpleDialog
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
                </AppLoaderComponent>
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