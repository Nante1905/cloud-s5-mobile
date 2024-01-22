import {
    IonItem,
  } from '@ionic/react';
  import "./inscription.css";
const InscriptionComponent : React.FC = () => {
    return (
        <>
            <IonItem >
                    <div className="title-login" >
                            <h1>
                                Inscrivez vous c'est gratuit
                            </h1>
                    </div>
              </IonItem>
              <div className="ion-padding">
                <h1 className="form-title" >
                        Inscription
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Nom
                        </label>
                        <input type="text"   />
                    </div>
                    <div className="form-group">
                        <label>
                            Prénom
                        </label>
                        <input type="text"   />
                    </div>
                    <div className="form-group">
                        <label>
                            Email
                        </label>
                        <input type="text"   />
                    </div>
                    <div className="form-group">
                        <label>
                            Mot de passe
                        </label>
                        <input type="text"   />
                    </div>
                    <div className="form-submit">
                        S'Inscrire
                    </div>
                </div>
            </div>
        </>
    );
};

export default InscriptionComponent;