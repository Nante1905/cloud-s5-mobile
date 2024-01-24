import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css"
const SecondStepAnnonceCreation: React.FC<StepCreationAnnonceProps> = (props : any) => {
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
                        <select>
                            <option>
                                Marque
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>
                            Boite de vitesse
                        </label>
                        <select>
                            <option>
                                Marque
                            </option>
                        </select>
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