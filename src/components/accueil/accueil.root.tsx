import { IonPage } from "@ionic/react";
import AccueilComponent from "./accueil.component";
import "./accueil.css";
const Accueil : React.FC = () => {
    return (
        <IonPage>
            <AccueilComponent />
        </IonPage>
    );
};

export default Accueil;