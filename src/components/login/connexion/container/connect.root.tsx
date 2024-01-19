import { IonPage, IonButtons, IonBackButton, IonContent } from "@ionic/react";
import ConnectComponent from "../components/connect.component";

const ConnectRoot : React.FC = () => {
    return (
        <IonPage style={{color:"#ffff"}} id="view-message-page">
            <IonContent fullscreen>
                <ConnectComponent />
            </IonContent>
        </IonPage>
    );
};

export default ConnectRoot;