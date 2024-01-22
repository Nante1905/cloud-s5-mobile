import "./details-annonce.css";

const Caracteristique:React.FC = () => {
    return (
        <div className="ion-padding">
              <div className="annonce" >
                    <h2 className="car-annonce" >
                        <span className="bold" >Annonce n°:</span> 123E2
                    </h2>
                    <h2 className="car-annonce" >
                        <span className="bold" >Du:</span> 2024-01-01
                    </h2>
                </div>
                <h1 className="car-name" >Mercedes Benz - E class AMG</h1>
                <h2 className="car-caracteristique" >
                    <span  className="semi-bold" >Marque :</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Modèle :</span> 2024-01-01
                </h2 >
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Kilometrage :</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Consommation:</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Vitesse :</span> 2024-01-01
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Couleur :</span> 2024-01-01
                </h2>
                <p className="car-caracteristique" >
                <span className="semi-bold" >Description : </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="modif-button" >
                Modif
              </div>
        </div>
    );
};

export default Caracteristique;