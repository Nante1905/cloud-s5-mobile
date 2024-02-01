import { IonPage, IonButtons, IonBackButton, IonContent } from "@ionic/react";
import ProfilComponent from "./profil.component";
import "./profil.css"
const Profile : React.FC = () => {
    return (
        <IonPage style={{color:"#ffff"}} >
            <IonContent id="profil-page" fullscreen>
                <ProfilComponent />
            </IonContent>
        </IonPage>
    );
};

export default Profile;