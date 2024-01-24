import { IonPage, IonContent, IonItem } from "@ionic/react";
import { useState } from "react";
import FirstStepAnnonceCreation from "../../components/creation/first-step.components";
import { Tab, Tabs } from "@mui/material";
import SecondStepAnnonceCreation from "../../components/creation/second-step.components";
import ThirdStepAnnonceCreation from "../../components/creation/third-step.component";
import FourthStepAnnonceCreation from "../../components/creation/fourth-step.component";
import VerificationAnnonce from "../../components/creation/verification-step.root";

interface CreationAnnonceState{
    tab: string;
}
const initialState: CreationAnnonceState = {
    tab:"1"
}

export default  function  CreationAnnonce () {  
    const [state, setState] = useState(initialState);
    const handleTabChange = ( newValue: string) => {
        setState((state) => ({
          ...state,
          tab: newValue,
        }));
    };
    console.log(state.tab);
    
    return (
        <IonPage style={{ color: "#ffff" }} id="view-message-page">
            <IonContent fullscreen>
                <IonItem>
                    <div className="title-login">
                        <h1>
                            Vendez votre voiture
                        </h1>
                        </div>
                </IonItem>
                {state.tab == "1" && <FirstStepAnnonceCreation  onClickFunc={handleTabChange}  />}
                {state.tab == "2" && <SecondStepAnnonceCreation  onClickFunc={handleTabChange}  />}
                {state.tab == "3" && <ThirdStepAnnonceCreation  onClickFunc={handleTabChange}  />}
                {state.tab == "4" && <FourthStepAnnonceCreation  onClickFunc={handleTabChange}  />}
                {state.tab == "5" && <VerificationAnnonce  onClickFunc={handleTabChange}  />}
            </IonContent>
        </IonPage>
    );
}

// export default CreationAnnonce;