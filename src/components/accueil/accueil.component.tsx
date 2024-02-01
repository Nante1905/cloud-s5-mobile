import VerifiedIcon from '@mui/icons-material/Verified';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    IonItem,
  } from '@ionic/react';
const AccueilComponent : React.FC = () => {
    return (
        <div id="accueil">
            <div className="clip-path-accueil">
                
            </div>
            <div className="car-accueil">
                <div className="title-accueil">
                    Sera Vaika
                </div>
                <VerifiedIcon className="icon-accueil" />
                <div className="image-accueil" >
                    <img src="7970479.png" alt="" />
                    <div  className="bar-group">
                        <RemoveIcon className="bar-accueil" />
                        <RemoveIcon className="bar-accueil"  />
                    </div>
                </div>
                <div className='button-accueil'>
                    <a href="/login" className=" login-accueil">Conexion</a>
                    <a href="/inscription" className=" sign-in-accueil">Inscription</a>
                    {/* <IonItem id="button-ion-item-accueil" routerLink="/login" >
                        <div className="login-in-accueil" >Conexion</div>
                    </IonItem>
                    <IonItem id="button-ion-item-accueil" routerLink="/login" >
                        <div className="sign-in-accueil" >Inscription</div>
                    </IonItem> */}
                </div>
            </div>
        </div>
    );
};

export default AccueilComponent;