import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import "../theme/home.css";
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="title" >
        <IonToolbar>
          <IonTitle  >Tab 23</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="content" >
        <IonHeader className="header" collapse="condense">
          <IonToolbar>
            <IonTitle  className="card-title" size="large">Tab 12</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="title-liste" >
            
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
