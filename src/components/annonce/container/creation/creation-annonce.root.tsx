import React, { useState } from 'react';
import { IonPage,  IonContent, IonItem } from "@ionic/react";
import "./creation.css";
import FirstStepAnnonceCreation from "../../components/creation/first-step.components";

interface CreationAnnonceState{
    tab: string;
}
const initialState: CreationAnnonceState = {
    tab:"1"
}

const CreationAnnonce =  () => {    
    const [state, setState] = useState<CreationAnnonceState>(initialState);
    const handleTabChange = (newValue: string) => {
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
                {state.tab == "1" && <FirstStepAnnonceCreation onTabChange={handleTabChange}  />}
            </IonContent>
        </IonPage>
    );
}

export default CreationAnnonce;