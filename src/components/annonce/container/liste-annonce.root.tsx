import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import "../../../theme/home.css";
import ListAnnonceComponent from "../components/list-annonce.component";

const ListAnnonce: React.FC = () => {
    return (
      <IonPage>
        <IonHeader className="title" >
          <IonToolbar  className="title-toolbar" >
            <IonTitle  >Annonces</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="content" >
          <ListAnnonceComponent/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default ListAnnonce;