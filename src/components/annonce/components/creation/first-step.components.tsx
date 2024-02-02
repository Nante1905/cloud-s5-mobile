import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { Annonce, Couleur, Etat, Marque, Modele, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import { Button } from "@mui/material";
import { IonAlert, IonButton } from '@ionic/react';
import { useState } from "react";
import { Item , transformObjectToItem , transformListToItemList } from "../../../../shared/types/item";
import { SimpleDialog } from "../../../../shared/hooks/SimpleDialog";
interface firstStepState{
    open : boolean,
    type : string,
    dialogTitle: string,
    items : Item[],
    marqueClasse: string,
    modeleClasse:string, 
    couleurClasse: string,
    etatValid: number,
    etatClasse: string
}
interface FirstStepProps{
    handleMarqueChange: (newValue: Marque) => void;
    handleModeleChange: (newValue: Modele)=> void;
    handleEtatChange: (newValue: Etat)=>void;
    handleCouleurChange:(newValue: Couleur)=>void;
    onClickFunc: (newValue: string) => void;
    annonce: Annonce;
    marque: Marque;
}   
const initialState: firstStepState = {
    open: false,
    type: "",
    dialogTitle: "",
    items: [],
    marqueClasse: "",
    modeleClasse: "",
    couleurClasse: "", 
    etatValid:0,
    etatClasse:""
}

const FirstStepAnnonceCreation: React.FC<FirstStepProps> = (props : FirstStepProps) => {
    const [state, setState] = useState(initialState);
    const marque = [
        { id: 1, nom: 'Toyota Camry' },
        { id: 2, nom: 'Honda Accord' },
        { id: 3, nom: 'Ford Mustang' },
      ];

    const modele = [
    { id: 1, nom: 'modèle 1' },
    { id: 2, nom: 'modèle 2' },
    { id: 3, nom: 'modèle 3' },
    ];

    const etat = [
        { id: 1, nom: 'etat 1' },
        { id: 2, nom: 'etat 2' },
        { id: 3, nom: 'etat 3' },
        ];

    const couleur = [
        { id: 1, nom: 'couleur 1' },
        { id: 2, nom: 'couleur 2' },
        { id: 3, nom: 'couleur 3' },
        ];

    const handleClickOpen = (items: Item[], title: string, type: string) => {
        console.log( "coucou" );
        setState(prevState => ({
            ...prevState,
            open: true,
            dialogTitle: title,
            type: type,
            items: items,
        }));
    };

    const handleClose = (item: Item | null) => {
        setState(prevState => ({
            ...prevState,
            open: false
        }));
        switch(state.type) {
            case 'marque':
                if (item) {
                    props.handleMarqueChange({
                        id: item.id,
                        nom: item.name
                    })
                    setState((prevState)=>({
                        ...prevState,
                        marqueClasse:""
                    }))
                }
                break;
            case 'modele':
                if (item) {
                    props.handleModeleChange({
                        id: item.id,
                        nom:item.name
                    })
                    setState((prevState)=>({
                        ...prevState,
                        modeleClasse:""
                    }))
                }
                break;
            case 'etat':
                if (item) {
                    props.handleEtatChange({
                        id:item.id,
                        nom: item.name,
                        valeur:item.id
                    })
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
                break;
            case 'couleur':
                if (item) {
                    props.handleCouleurChange({
                        id:item.id,
                        nom: item.name,
                        hexa:''
                    })
                    setState((prevState)=>({
                        ...prevState,
                        couleurClasse:""
                    }))
                }
                break;
            default:
                break;
        }
    };
    
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
        if(state.etatValid==0){
            setState((prevState)=>({
                ...prevState,
                etatValid:-1,
                etatClasse:"warning"
            }))
        }
        if(props.marque.id!=0 && props.annonce.voiture.modele.id != 0  && props.annonce.voiture.couleur.id!=0 && state.etatValid!=0){
            console.log("okey");
            
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
    return (
        <div className="ion-padding">
                <h1 className="form-title" >
                        Caractéristiques générales
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        
                        <label>
                            Marque
                        </label>
                        <Button className={state.marqueClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(marque , "id" , "nom" ), 'Choisissez une Marque', 'marque')}>
                        {props.marque.nom}
                        </Button>
            
                    
                    <SimpleDialog
                        open={state.open && state.type === 'marque'}
                        onClose={handleClose}
                        items={state.items}
                        title={state.dialogTitle}
                    />
                    </div>
                    
                    <div className="form-group">
                        <label>
                            Modèle
                        </label>
                        <Button className={state.modeleClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(modele , "id" , "nom" ), 'Choisissez un Modèle', 'modele')}>
                        {props.annonce.voiture.modele.nom}
                    </Button>
                    
                    <SimpleDialog
                        open={state.open && state.type === 'modele'}
                        onClose={handleClose}
                        items={state.items}
                        title={state.dialogTitle}
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
                        <Button className={state.etatClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(etat , "id" , "nom" ), 'Choisissez un Etat', 'etat')}>
                            {props.annonce.voiture.Etat.nom}
                        </Button>
                        
                        <SimpleDialog 
                            open={state.open && state.type === 'etat'}
                            onClose={handleClose}
                            items={state.items}
                            title={state.dialogTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Couleur
                        </label>
                        <Button className={state.couleurClasse} id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(couleur , "id" , "nom" ), 'Choisissez une Couleur', 'couleur')}>
                            {props.annonce.voiture.couleur.nom}
                        </Button>
                        <SimpleDialog
                            open={state.open && state.type === 'couleur'}
                            onClose={handleClose}
                            items={state.items}
                            title={state.dialogTitle}
                        />
                    </div>
                    <div className="ion-button-container">
                        <div className="button-invalid-form" >Précedent</div>
                        <div className="button-next-form" onClick={() => next()} > Suivant</div>
                    </div>
                </div>
            </div>
    );
}
export default FirstStepAnnonceCreation;