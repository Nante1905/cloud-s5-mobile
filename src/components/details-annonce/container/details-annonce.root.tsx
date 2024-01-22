import { IonPage, IonButtons, IonBackButton, IonContent } from "@ionic/react";
import DetailsAnnonce from "../components/details-annonce.component";

const DetailsAnnonceRoot : React.FC = () => {
    return (
    <IonPage style={{color:"#ffff"}} id="view-message-page">
            <IonButtons className='button-back' 
            slot="start">
              <IonBackButton  style={{color:"#ffff"}} text="" defaultHref="/annonce"></IonBackButton>
            </IonButtons>
        <IonContent fullscreen>
            <DetailsAnnonce />
        </IonContent>
      </IonPage>
    );
};

export default DetailsAnnonceRoot;