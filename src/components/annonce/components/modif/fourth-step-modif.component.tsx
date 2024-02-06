import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { Annonce, Image, StepCreationAnnonceProps } from "../../../../shared/types/creation-annonce-types";
import "../../container/modif/modif.css";
import RichText from "../../../../shared/rich-text/richText";
import PhotoGallery from "../../../../shared/photo/usePhotoGallery";
// import { usePhotoGallery } from "../../../../shared/photo/usePhotoGallery";
import React, { useState } from 'react';
interface FourthStepProps{
    onClickFunc: (value:string)=> void;
    handleDescriptionChange:(value: string)=>void;
    annonce:Annonce,
    handleImageChange: (value: Image)=>void;
    handleImageDelete: (value:string)=>void;
}
interface PhotoGalleryState{
    addPhotoClass: string
  }
const initialState : PhotoGalleryState={
    addPhotoClass:''
  }

const FourthStepAnnonceCreation: React.FC<FourthStepProps> = (props : FourthStepProps) => {
    const [state, setState] = useState<PhotoGalleryState>(initialState);
    const onContentChange = (value:string)=>{
        props.handleDescriptionChange(value);
    }
    const next = ()=>{
        if(props.annonce.medias.length==0){
            setState((state)=>({
                ...state, 
                addPhotoClass:'ajout-photo-error'
            }))
        }
        else{
            props.onClickFunc("5");
        }
    }
    const handleClassChange = ()=>{
        setState((state)=>({
            ...state, 
            addPhotoClass:''
        }))
    }
    return (
        <div className="ion-padding">
                <h1 className="form-title" >
                    Finalisez votre annonce 
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
                    <div>
                        {props.annonce.medias.map((photo, index) => (
                            <img key={index} src={photo.url} alt="" />
                        ))}
                        </div>
                    {/* <PhotoGallery handleClassChange={handleClassChange} addPhotoClass={state.addPhotoClass} handleImageDelete={props.handleImageDelete} handleImageChange={props.handleImageChange} annonce={props.annonce}/> */}
                    <div className="ion-button-container">
                        <div className="button-next-form" onClick={() => props.onClickFunc("3")}>Précedent</div>
                        <div className="button-next-form" onClick={() => next()} >Suivant</div>
                    </div>
                </div>
            </div>
    );
}
export default FourthStepAnnonceCreation;