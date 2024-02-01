import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { Annonce, Couleur, Etat, Marque, Modele, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import { Button } from "@mui/material";
import { useState } from "react";
import { Item , transformObjectToItem , transformListToItemList } from "../../../../shared/types/item";
import { SimpleDialog } from "../../../../shared/hooks/SimpleDialog";
interface firstStepState{
    open : boolean,
    type : string,
    dialogTitle: string,
    items : Item[]
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
    open: false ,
    type: "",
    dialogTitle :"",
    items: []
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
                }
                break;
            case 'modele':
                if (item) {
                    props.handleModeleChange({
                        id: item.id,
                        nom:item.name
                    })
                }
                break;
            case 'etat':
                if (item) {
                    props.handleEtatChange({
                        id:item.id,
                        nom: item.name,
                        valeur:item.id
                    })
                }
                break;
            case 'couleur':
                if (item) {
                    props.handleCouleurChange({
                        id:item.id,
                        nom: item.name,
                        hexa:''
                    })
                }
                break;
            default:
                break;
        }
    };
    
    
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
                        <Button id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(marque , "id" , "nom" ), 'Choisissez une Marque', 'marque')}>
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
                        <Button id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(modele , "id" , "nom" ), 'Choisissez un Modèle', 'modele')}>
                        {props.annonce.voiture.modele.nom}
                    </Button>
                    
                    <SimpleDialog
                        open={state.open && state.type === 'modele'}
                        onClose={handleClose}
                        items={state.items}
                        title={state.dialogTitle}
                    />
                    </div>
                    <div className="form-group">
                        <label>
                            Etat
                        </label>
                        <Button id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(etat , "id" , "nom" ), 'Choisissez un Etat', 'etat')}>
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
                        <Button id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(couleur , "id" , "nom" ), 'Choisissez une Couleur', 'couleur')}>
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
                        <div className="button-next-form" onClick={() => props.onClickFunc("2")} > Suivant</div>
                    </div>
                </div>
            </div>
    );
}
export default FirstStepAnnonceCreation;