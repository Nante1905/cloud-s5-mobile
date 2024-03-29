import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css"
const FirstStepAnnonceCreation: React.FC<StepCreationAnnonceProps> = (props : any) => {
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
                        <select>
                            <option>
                                Marque
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>
                            Modèle
                        </label>
                        <select>
                            <option>
                                Marque
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>
                            Année d'obtention
                        </label>
                        <select>
                            <option>
                                Marque
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>
                            Etat
                        </label>
                        <select>
                            <option>
                                Marque
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>
                            Couleur
                        </label>
                        <select>
                            <option>
                                Marque
                            </option>
                        </select>
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