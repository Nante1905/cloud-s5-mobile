import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css"
const ThirdStepAnnonceCreation: React.FC<StepCreationAnnonceProps> = (props : any) => {
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
                        <input type="text"/>
                    </div>
                    <div className="or-form" >
                    ---------------- ou ----------------
                    </div>
                    <div className="form-group">
                        <div className="evaluation" >
                            Evaluer le prix
                        </div>
                    </div>
                    <IonGrid>
                    <IonRow >
                        <IonCol size="5" className="ion-text-start">
                        <div className="button-next-form"  onClick={() => props.onClickFunc("2")}  >précedent</div>
                        </IonCol>
                        <IonCol size="5" offset="1" className="ion-text-end">
                            <div className="button-next-form" onClick={() => props.onClickFunc("4")} > Suivant</div>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </div>
            </div>
    );
}
export default ThirdStepAnnonceCreation;