import VerifiedIcon from '@mui/icons-material/Verified';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    IonItem,
  } from '@ionic/react';
const AccueilComponent : React.FC = () => {
    const renderUserName = () => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token");
            const body = JSON.parse(atob(token!.split(".")[1]));
            return <a href="/tabs" className="button-play-accueil pulsate">Appuyer ici pour continuer</a>;
        } else {
            return (
                <> 
                    <a href="/login" className="login-accueil">Connexion</a>
                    <a href="/inscription" className="login-accueil">Inscription</a>
                </>
            );
        }
    };
    return (
        <div id="accueil">
            <div className="clip-path-accueil">
                
            </div>
            <div className="car-accueil">
                <div className="title-accueil">
                    Sera Vaika
                </div>
                <VerifiedIcon className="rotate-entry icon-accueil" />
                <div className="image-accueil" >
                    <img src="2745453.png" alt="" />
                    <div  className="bar-group">
                        <RemoveIcon className="bar-accueil" />
                        <RemoveIcon className="bar-accueil"  />
                    </div>
                </div>
                <div className='button-accueil'>
                    {renderUserName()}
                    {/* <a href="/login" className="login-accueil">Connexion</a>
                    <a href="/inscription" className="login-accueil">Inscription</a> */}
                    {/* <a href="/tabs" className="button-play-accueil pulsate">Appuyer ici pour continuer</a> */}
                </div>
            </div>
        </div>
    );
};

export default AccueilComponent;