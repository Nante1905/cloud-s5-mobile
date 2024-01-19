import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";

const FirstStepAnnonceCreation: React.FC<StepCreationAnnonceProps> = (props) => {
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
                        <IonCol size="6" className="ion-text-start">
                        <IonItem className="button-form-creation"  disabled={true}  routerLink="/page-gauche">
                        <div>précedent</div>
                        </IonItem>
                        </IonCol>
                        <IonCol size="6" className="ion-text-end">
                        <IonItem  routerLink="/annonce/create/two">
                            <div>Suivant</div>
                        </IonItem>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </div>
            </div>
    );
}
export default FirstStepAnnonceCreation;