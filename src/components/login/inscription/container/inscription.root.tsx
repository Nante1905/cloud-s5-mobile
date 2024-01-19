import { IonPage, IonButtons, IonBackButton, IonContent } from "@ionic/react";
import InscriptionComponent from "../components/inscription.component";

const InscriptionRoot : React.FC = () => {
    return (
        <IonPage style={{color:"#ffff"}} id="view-message-page">
            <IonContent fullscreen>
                <InscriptionComponent />
            </IonContent>
        </IonPage>
    );
};

export default InscriptionRoot;