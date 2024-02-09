import { IonGrid, IonRow, IonCol } from "@ionic/react";
import "./verification-annonce.css";
import { Annonce, Marque, StepCreationAnnonceProps, VerificationAnnonceProps } from "../../../../../shared/types/creation-annonce-types";

const VerificationCaracteristique:React.FC<VerificationAnnonceProps> = (props : VerificationAnnonceProps ) => {
    return (
        <div className="ion-padding verification">
                <div className="annonce" >
                    <h2 className="car-annonce" >
                        <span className="bold" >Annonce du:</span> {props.annonce.dateCreation.toLocaleDateString('fr-FR',  {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} à {props.annonce.dateCreation.toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false})}
                    </h2>
                </div>
                <h1 className="car-name" >{props.marque.nom} - {props.annonce.voiture.modele.nom}</h1>
                <h2 className="car-caracteristique" >
                    <span  className="semi-bold" >Marque :</span> {props.marque.nom}
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Modèle :</span> {props.annonce.voiture.modele.nom}
                </h2 >
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Kilometrage :</span> {props.annonce.voiture.kilometrage.toLocaleString('fr-FR', {
                                    useGrouping: true,
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Consommation:</span> {props.annonce.voiture.consommation.toLocaleString('fr-FR', {
                                    useGrouping: true,
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Boîte de vitesse :</span> {props.annonce.voiture.boiteVitesse.nom}
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Couleur :</span> {props.annonce.voiture.couleur.nom}
                </h2>
                <h2 className="car-caracteristique" >
                    <span className="semi-bold" >Prix :</span> MGA {props.annonce.prix.toLocaleString('fr-FR', {
                                    useGrouping: true,
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                </h2>
                <p className="car-caracteristique" >
                <span className="semi-bold" >Description : </span> <div dangerouslySetInnerHTML={{ __html: props.annonce.description }}></div>
                  
                </p>
                {props.status == 0 && <div className="ion-button-container">
                        <div className="button-next-form" onClick={() => props.onClickFunc("4")}>Précedent</div>
                        <div className="button-next-form" onClick={() => props.save(props.annonce)} >Terminer</div>
                </div>}
                { props.status==-1 && <div className="ion-button-container">
                        <div className="button-next-form" onClick={() => props.exit()}>Quitter</div>
                        <div className="button-next-form" onClick={() => props.save(props.annonce)}>Recommencer</div>
                </div>}
                
        </div>
    );
};

export default VerificationCaracteristique;