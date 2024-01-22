import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import "../theme/home.css";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="title" >
        <IonToolbar>
          <IonTitle  >Tab 13</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="content" >
        <IonHeader className="header" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 12</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
