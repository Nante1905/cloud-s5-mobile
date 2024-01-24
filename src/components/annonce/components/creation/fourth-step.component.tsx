import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css";
import RichText from "../../../../shared/rich-text/richText";
import PhotoGallery from "../../../../shared/photo/usePhotoGallery";
// import { usePhotoGallery } from "../../../../shared/photo/usePhotoGallery";
const FourthStepAnnonceCreation: React.FC<StepCreationAnnonceProps> = (props : any) => {
    // const { photos, takePhoto } = usePhotoGallery();
    return (
        <div className="ion-padding">
                <h1 className="form-title" >
                    Finaliser votre annonce 
                </h1>
                <div className="form-login">
                    <div className="form-group">
                        <label>
                            Description
                        </label>
                        <div className="rich-text" >
                            <RichText onContentChange={props.onContentChange} />
                        </div>                            
                    </div>
                    {/* <div>
                        {photos.map((photo, index) => (
                            <img key={index} src={photo.webviewPath} alt="" />
                        ))}
                        </div> */}
                    <PhotoGallery />
                    <IonGrid>
                    <IonRow >
                        <IonCol size="5" className="ion-text-start">
                        <div className="button-next-form"  onClick={() => props.onClickFunc("3")}  >précedent</div>
                        </IonCol>
                        <IonCol size="5" offset="1" className="ion-text-end">
                            <div className="button-next-form" onClick={() => props.onClickFunc("5")} > Suivant</div>
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                </div>
            </div>
    );
}
export default FourthStepAnnonceCreation;