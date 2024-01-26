import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css"
import { Button } from "@mui/material";
import { useState } from "react";
import { Item , transformObjectToItem , transformListToItemList } from "../../../../shared/types/item";
import { SimpleDialog } from "../../../../shared/hooks/SimpleDialog";
interface firstStepState{
    open : boolean,
    selectedMarque : Item ,
    selectedModele : Item,
    selectedEtat : Item,
    selectedCouleur : Item,
    type : string,
    dialogTitle: string,
    items : Item[]
}
const initialState: firstStepState = {
    open: false ,
    selectedMarque: {id : 0 , name: "aucun marque"},
    selectedModele: {id : 0 , name: "aucun modèle"},
    selectedEtat : {id : 0 , name : "aucun etat"},
    selectedCouleur : {id : 0 , name : "aucune couleur"},
    type: "",
    dialogTitle :"",
    items: []
}

const FirstStepAnnonceCreation: React.FC<StepCreationAnnonceProps> = (props : any) => {
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
                    setState(prevState => ({
                        ...prevState,
                        selectedMarque: transformObjectToItem( item , "id" , "name" )
                    }));
                }
                break;
            case 'modele':
                if (item) {
                    setState(prevState => ({
                        ...prevState,
                        selectedModele: transformObjectToItem( item , "id" , "name" )
                    }));
                }
                break;
            case 'etat':
                if (item) {
                    setState(prevState => ({
                        ...prevState,
                        selectedEtat: transformObjectToItem( item , "id" , "name" )
                    }));
                }
                break;
            case 'couleur':
                if (item) {
                    setState(prevState => ({
                        ...prevState,
                        selectedCouleur: transformObjectToItem( item , "id" , "name" )
                    }));
                }
                break;
            default:
                break;
        }
    };
    
    
    return (
        <div className="ion-padding">
                <h1 className="form-title" >
                        Caracteristiques générales
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Marque
                        </label>
                        <Button id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList(marque , "id" , "nom" ), 'Choisissez une Marque', 'marque')}>
                        {state.selectedMarque ? `${state.selectedMarque.name}` : 'Aucune marque sélectionnée' }
                    </Button>
                    
                    <SimpleDialog
                        selectedValue={state.selectedMarque}
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
                        {state.selectedModele ? `${state.selectedModele.name}` : 'Aucune modèle sélectionnée' }
                    </Button>
                    
                    <SimpleDialog
                        selectedValue={state.selectedModele}
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
                            {state.selectedEtat ? `${state.selectedEtat.name}` : 'Aucun état sélectionnée' }
                        </Button>
                        
                        <SimpleDialog
                            selectedValue={state.selectedEtat}
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
                            {state.selectedCouleur ? `${state.selectedCouleur.name}` : 'Aucune couleur sélectionnée' }
                        </Button>
                        
                        <SimpleDialog
                            selectedValue={state.selectedCouleur}
                            open={state.open && state.type === 'couleur'}
                            onClose={handleClose}
                            items={state.items}
                            title={state.dialogTitle}
                        />
                    </div>
                    <IonGrid>
                    <IonRow >
                        <IonCol size="5" className="ion-text-start">
                        <div className="button-invalid-form" >précedent</div>
                        </IonCol>
                        <IonCol size="5" offset="1" className="ion-text-end">
                            <div className="button-next-form" onClick={() => props.onClickFunc("2")} > Suivant</div>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </div>
            </div>
    );
}
export default FirstStepAnnonceCreation;