import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { Annonce, Image, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/creation/creation.css";
import RichText from "../../../../shared/rich-text/richText";
import PhotoGallery from "../../../../shared/photo/usePhotoGallery";
// import { usePhotoGallery } from "../../../../shared/photo/usePhotoGallery";
interface FourthStepProps{
    onClickFunc: (value:string)=> void;
    handleDescriptionChange:(value: string)=>void;
    annonce:Annonce,
    handleImageChange: (value: Image)=>void;
    handleImageDelete: (value:string)=>void;
}

const FourthStepAnnonceCreation: React.FC<FourthStepProps> = (props : FourthStepProps) => {
    const onContentChange = (value:string)=>{
        props.handleDescriptionChange(value);
    }
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
                            <RichText onContentChange={onContentChange} defaultValue={props.annonce.description} />
                        </div>                            
                    </div>
                    {/* <div>
                        {photos.map((photo, index) => (
                            <img key={index} src={photo.webviewPath} alt="" />
                        ))}
                        </div> */}
                    <PhotoGallery handleImageDelete={props.handleImageDelete} handleImageChange={props.handleImageChange} annonce={props.annonce}/>
                    <div className="ion-button-container">
                        <div className="button-next-form" onClick={() => props.onClickFunc("3")}>Précedent</div>
                        <div className="button-next-form" onClick={() => props.onClickFunc("5")} >Suivant</div>
                    </div>
                </div>
            </div>
    );
}
export default FourthStepAnnonceCreation;