import { IonPage, IonContent, IonItem } from "@ionic/react";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Annonce, BoiteVitesse, Couleur, Energie, Etat, Image, Marque, Modele } from "../../../../shared/types/creation-annonce-types";
import SecondStepAnnonceCreation from "../../components/modif/second-step-modif.components";
import ThirdStepAnnonceCreation from "../../components/modif/third-step-modif.component";
import FourthStepAnnonceCreation from "../../components/modif/fourth-step-modif.component";
import VerificationAnnonce from "../../components/creation/verification-step.root";
import LastStepAnnonceCreation from "../../components/modif/last-step-modif.component";
import FirstStepAnnonceCreation from "../../components/modif/first-step-modif.components";
import { useParams } from "react-router";
import { getById } from "../../../service/annonce.service";
import { ApiResponse } from "../../../../shared/types/Response";
import { getErrorMessage } from "../../../../shared/service/api-service";
 
interface CreationAnnonceState{
    tab: string;
    annonce: Annonce,
    marque: Marque,
    prixEvalue: number
}
const initialState: CreationAnnonceState = {
    prixEvalue:0,
    tab:"1", 
    annonce: {
        medias: [],
        id: 0,
        reference: '',
        description: '',
        status: 0,
        dateCreation: new Date(Date.now()),
        prix: 0,
        commission: 0,
        nbVues: 0,
        utilisateur: {
            id: 0,
            nom: '',
            prenom: ''
        },
        voiture: {
            Etat: {
                id: 0,
                nom: 'Sélectionner un état',
                valeur: 0
            },
            id: 0,
            consommation: 0,
            kilometrage: 0,
            etat: 0,
            couleur: {
                id: 0,
                nom: 'Sélectionner une couleur',
                hexa: ''
            },
            modele: {
                id: 0,
                nom: 'Sélectionner un modèle'
            },
            energie: {
                id: 0,
                nom: 'Sélectionner une énergie'
            },
            boiteVitesse: {
                id: 0,
                nom: 'Sélectionner une boîte de vitesse'
            },
            idModele: 0,
            idCouleur: 0,
            idBoiteVitesse: 0,
            idEnergie: 0
        },
        idUtilisateur: 0,
        marque: {
            id : 0,
            nom : "",
            logo: ""
        }
    },
    marque:{
        id:0,
        nom:'Sélectionner une marque',
        logo:''
    }
}

export default  function  ModifAnnonce () {  
    const id = useParams();
    console.log( "id" , id );
    const [state, setState] = useState(initialState);
    var annonce_by_id = null;
    useEffect(() => { 
        getById(id.id)
          .then((res) => {
            const response: ApiResponse = res.data;
            if (response.ok) {
              console.log( "tena ok" );
              console.log( response );
              annonce_by_id = response.data;
              
              setState((state) => ({
                ...state,
                loading: false,
                annonce: response.data,
              }));
            } else {
              setState((state) => ({
                ...state,
                loading: false,
                openError: true,
                errorMessage: response.err,
              }));
            }
          })
          .catch((err) => {
            console.error(err);
            let errorMessage = "";
            if (
              !err.response?.data.err ||
              err.response?.data.err == "" ||
              err.response?.data.err == null
            ) {
              errorMessage = getErrorMessage(err.code);
            } else {
              errorMessage = err.response.data.err;
            }
            console.log("etoo");
  
            setState((state) => ({
              ...state,
              loading: false,
              openError: true,
              errorMessage: errorMessage,
            }));
          });
       } , []); 
    const handleTabChange = ( newValue: string) => {
        setState((state) => ({
          ...state,
          tab: newValue,
        }));
    };
    const handleDescriptionChange = (newDescription: string) => {
        setState(prevState => ({
          ...prevState,
          annonce: {
            ...prevState.annonce,
            description: newDescription,
          },
        }));
      };
      const handleImageDelete = (filename: string) => {
        const updatedMedias = state.annonce.medias.filter((media) => media.fileName !== filename);
    
        setState((prevState)=>({
          ...prevState,
          annonce:{
            ...prevState.annonce,
            medias: updatedMedias
          }
        }));
      };
      const handleImageChange = (newImage : Image) => {
        setState((prevState)=>({
            ...prevState,
            annonce: {
                ...prevState.annonce,
                medias:[...prevState.annonce.medias, newImage]
            }
        }))
      };
      const handleEstimationChange = (newValue: number) => {
        setState(prevState => ({
          ...prevState,
          prixEvalue: newValue
        }));
      };
    const handlePriceChange = (newPrice: number) => {
        setState(prevState => ({
          ...prevState,
          annonce: {
            ...prevState.annonce,
            prix: newPrice,
          },
        }));
      };
    const handleColorChange = (newColor: Couleur) => {
        setState(prevState => ({
          ...prevState,
          annonce: {
            ...prevState.annonce,
            voiture:{
                ...prevState.annonce.voiture,
                couleur: newColor,
                idCouleur: newColor.id
            }
          },
        }));
      };
      const handleConsommationChange = (newConso: number) => {
        setState(prevState => ({
          ...prevState,
          annonce: {
            ...prevState.annonce,
            voiture:{
                ...prevState.annonce.voiture,
                consommation:newConso
            }
          },
        }));
      };
      function handleKilometrageChange(newKM: number) {
        setState(prevState => ({
            ...prevState,
            annonce: {
                ...prevState.annonce,
                voiture: {
                    ...prevState.annonce.voiture,
                    kilometrage: newKM
                }
            },
        }));
    }
    const handleModelChange = (newModel: Modele) => {
    setState(prevState => ({
        ...prevState,
        annonce: {
        ...prevState.annonce,
        voiture:{
            ...prevState.annonce.voiture,
            modele: newModel,
            idModele: newModel.id
        }
        }
    }));
    };
    const handleEnergieChange = (newEnergie: Energie) => {
        setState(prevState => ({
            ...prevState,
            annonce: {
            ...prevState.annonce,
            voiture:{
                ...prevState.annonce.voiture,
                energie: newEnergie,
                idEnergie: newEnergie.id
            }
            },
        }));
    };
    const handleEtatChange = (newEtat: Etat) => {
        setState(prevState => ({
            ...prevState,
            annonce: {
            ...prevState.annonce,
            voiture:{
                ...prevState.annonce.voiture,
                Etat: newEtat,
                etat: newEtat.id
            }
            },
        }));
    };
    const handleMarqueChange = (newMarque: Marque) => {
        setState(prevState => ({
            ...prevState,
            marque: newMarque
        }));
    };
    const handleBoiteVitesseChange = (newBV: BoiteVitesse) => {
        setState(prevState => ({
            ...prevState,
            annonce: {
            ...prevState.annonce,
            voiture:{
                ...prevState.annonce.voiture,
                boiteVitesse: newBV,
                idBoiteVitesse: newBV.id
            }
            },
        }));
    };
      
      
    console.log(state.tab);
    
    return (
        <IonPage style={{ color: "#ffff" }} id="view-message-page">
            <IonContent fullscreen>
                {state.tab!="5" && state.tab!="6" && <IonItem>
                    <div className="title-login">
                        <h1>
                            Modifier votre annonce
                        </h1>
                    </div>
                </IonItem>}
                {state.tab == "1" && <FirstStepAnnonceCreation  onClickFunc={handleTabChange} handleCouleurChange={handleColorChange} handleEtatChange={handleEtatChange} handleMarqueChange={handleMarqueChange} handleModeleChange={handleModelChange} annonce={state.annonce} marque={state.marque}/>}
                {state.tab == "2" && <SecondStepAnnonceCreation  onClickFunc={handleTabChange} handleBoiteVitesseChange={handleBoiteVitesseChange} handleConsommationChange={handleConsommationChange} handleEnergieChange={handleEnergieChange} handleKilometrageChange={handleKilometrageChange} annonce={state.annonce}/>}
                {state.tab == "3" && <ThirdStepAnnonceCreation handleEstimationChange={handleEstimationChange}  onClickFunc={handleTabChange}  annonce={state.annonce} handlePriceChange={handlePriceChange} estime={state.prixEvalue}/>}
                {state.tab == "4" && <FourthStepAnnonceCreation handleImageDelete={handleImageDelete} annonce={state.annonce} onClickFunc={handleTabChange} handleDescriptionChange={handleDescriptionChange} handleImageChange={handleImageChange} />}
                {state.tab == "5" && <VerificationAnnonce marque={state.marque} onClickFunc={handleTabChange} annonce={state.annonce} />}
                {state.tab == "6" && <LastStepAnnonceCreation annonce={state.annonce}/>}
            </IonContent>
        </IonPage>
    );
}

// export default CreationAnnonce;