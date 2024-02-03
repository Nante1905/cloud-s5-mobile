import { IonPage, IonButtons, IonBackButton, IonContent } from "@ionic/react";
import DetailsAnnonce from "../components/details-annonce.component";
import { useParams } from "react-router";

const DetailsAnnonceRoot : React.FC = () => {
  const id = useParams();
    return ( 
    <IonPage style={{color:"#ffff"}} id="view-message-page">
            <IonButtons className='button-back' 
            slot="start">
              <IonBackButton  style={{color:"#ffff"}} text="" defaultHref="/annonce"></IonBackButton>
            </IonButtons>
        <IonContent fullscreen>
            <DetailsAnnonce id_annonce={id.id} />
        </IonContent>
      </IonPage>
    );
};

export default DetailsAnnonceRoot;