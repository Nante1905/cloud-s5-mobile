import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { Annonce, BoiteVitesse, Energie, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css";
import { SimpleDialog } from "../../../../shared/hooks/SimpleDialog";
import { Item , transformObjectToItem , transformListToItemList } from "../../../../shared/types/item";
import { ChangeEvent, useState } from "react";
import { Button } from "@mui/material";
interface SecondStepState{
    open : boolean,
    type : string,
    dialogTitle: string,
    items : Item[]
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
    open: false ,
    type: "",
    dialogTitle :"",
    items: []
}
const SecondStepAnnonceCreation: React.FC<SecondStepProps> = (props : SecondStepProps) => {
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
                    props.handleEnergieChange({
                        id: item.id,
                        nom: item.name
                    })
                }
                break;
            case 'bv':
                if (item) {
                    props.handleBoiteVitesseChange({
                        id:item.id,
                        nom: item.name
                    })
                }
                break;
                default:
                break;
        }
    };
    const handleKilometrageChange = (e:  ChangeEvent<HTMLInputElement>) => {
        const newvalue  = parseFloat(e.target.value);
        if(isNaN(newvalue)){
            props.handleKilometrageChange(0);
        }
        else{
            props.handleKilometrageChange(newvalue);
        }
    };
    const handleConsommationChange = (e:  ChangeEvent<HTMLInputElement>) => {
        const newvalue  = parseFloat(e.target.value);
        if(isNaN(newvalue)){
            props.handleConsommationChange(0);
        }
        else{
            props.handleConsommationChange(newvalue);
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
                        {props.annonce.voiture.energie.nom}
                    </Button>
                    <SimpleDialog
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
                        {props.annonce.voiture.boiteVitesse.nom}
                        </Button>
                        <SimpleDialog
                           
                            open={state.open && state.type === 'bv'}
                            onClose={handleClose}
                            items={state.items}
                            title={state.dialogTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Consommation ( L/100km )
                        </label>
                        <input type="text" value={props.annonce.voiture.consommation} onChange={handleConsommationChange}/>
                    </div>
                    <div className="form-group">
                        <label>
                            Kilometrage
                        </label>
                        <input type="text" value={props.annonce.voiture.kilometrage} onChange={handleKilometrageChange}/>
                    </div>

                    <div className="ion-button-container">
                        <div className="button-next-form"  onClick={() => props.onClickFunc("1")} >Précedent</div>
                        <div className="button-next-form" onClick={() => props.onClickFunc("3")} > Suivant</div>
                    </div>
                </div>
            </div>
    );
}
export default SecondStepAnnonceCreation;