import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css";
import { SimpleDialog } from "../../../../shared/hooks/SimpleDialog";
import { Item , transformObjectToItem , transformListToItemList } from "../../../../shared/types/item";
import { useState } from "react";
import { Button } from "@mui/material";
interface SecondStepState{
    open : boolean,
    selectedEnergie : Item ,
    selectedBv : Item ,
    type : string,
    dialogTitle: string,
    items : Item[]
}
const initialState: SecondStepState = {
    open: false ,
    selectedEnergie: {id : 0 , name: "aucune energie"},
    selectedBv: {id : 0 , name: "aucune bv"},
    type: "",
    dialogTitle :"",
    items: []
}
const SecondStepAnnonceCreation: React.FC<StepCreationAnnonceProps> = (props : any) => {
    const [state, setState] = useState(initialState);
    const energie = [
        { id: 1, nom: 'energie 1' },
        { id: 2, nom: 'energie 2' },
        { id: 3, nom: 'energie 3' }
      ];

      const bv = [
        { id: 1, nom: 'bv 1' },
        { id: 2, nom: 'bv 2' },
        { id: 3, nom: 'bv 3' }
      ];

    const handleClickOpen = (items: Item[], title: string, type: string) => {
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
            case 'energie':
                if (item) {
                    setState(prevState => ({
                        ...prevState,
                        selectedEnergie: transformObjectToItem( item , "id" , "name" )
                    }));
                }
                break;
            case 'bv':
                if (item) {
                    setState(prevState => ({
                        ...prevState,
                        selectedBv: transformObjectToItem( item , "id" , "name" )
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
                    Plus de détails
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Energie
                        </label>
                        <Button id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList( energie, "id" , "nom" ), 'Choisissez une Energie', 'energie')}>
                        {state.selectedEnergie ? `${state.selectedEnergie.name}` : 'Aucune energie sélectionnée' }
                    </Button>
                    <SimpleDialog
                        selectedValue={state.selectedEnergie}
                        open={state.open && state.type === 'energie'}
                        onClose={handleClose}
                        items={state.items}
                        title={state.dialogTitle}
                    />
                    </div>
                    <div className="form-group">
                        <label>
                            Boite de vitesse
                        </label>
                        <Button id="bouton-choice" variant="outlined" onClick={() => handleClickOpen(transformListToItemList( bv, "id" , "nom" ), 'Choisissez une boie de vitesse', 'bv')}>
                        {state.selectedBv ? `${state.selectedBv.name}` : 'Aucune boite de vitesse sélectionnée' }
                        </Button>
                        <SimpleDialog
                            selectedValue={state.selectedBv}
                            open={state.open && state.type === 'bv'}
                            onClose={handleClose}
                            items={state.items}
                            title={state.dialogTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Consommation
                        </label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>
                            Kilometrage
                        </label>
                        <input type="text"/>
                    </div>
                    <IonGrid>
                    <IonRow >
                        <IonCol size="5" className="ion-text-start">
                        <div className="button-next-form"  onClick={() => props.onClickFunc("1")}  >précedent</div>
                        </IonCol>
                        <IonCol size="5" offset="1" className="ion-text-end">
                            <div className="button-next-form" onClick={() => props.onClickFunc("3")} > Suivant</div>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </div>
            </div>
    );
}
export default SecondStepAnnonceCreation;