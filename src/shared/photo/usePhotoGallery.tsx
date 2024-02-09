import React, { useState } from 'react';
import { IonButton, IonImg, IonGrid, IonRow, IonCol, isPlatform, IonIcon, IonAlert } from '@ionic/react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import "./photo.css"
import { Annonce, Image } from '../types/creation-annonce-types';
import { Directory, Filesystem, FilesystemDirectory, FilesystemEncoding } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

interface PhotoGalleryProps{
  handleImageChange: (value: Image)=>void;
  annonce: Annonce;
  handleImageDelete: (value:string)=>void;
  addPhotoClass: string;
  handleClassChange : (value:string)=> void;
}

async function base64FromPath(path: string): Promise<string> {
  
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject('method did not return a string')
      }
    };
    reader.readAsDataURL(blob);
  });
}

const PhotoGallery = (props: PhotoGalleryProps) => {

  const savePicture = async (photo: Photo, fileName: string): Promise<Image> => {
    let base64Data: string;
    // "hybrid" will detect Cordova or Capacitor;
    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path!
      });
      base64Data = file.data.toString();
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }
    const base64Prefix = 'base64,';
    let parts = base64Data.split(base64Prefix);
    if (parts.length >  1) {
      base64Data = parts[1];
    } else {
      console.log('sans prefixe');
    }
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    if (isPlatform('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        fileName: savedFile.uri,
        webViewPath: Capacitor.convertFileSrc(savedFile.uri),
        blob: base64Data, 
        contentType: photo.format,
        url:''
      };
    }
    else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        fileName: fileName,
        webViewPath: photo.webPath,
        blob: base64Data, 
        contentType: photo.format,
        url:''
      };
    }
  };
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90,
    });

    const fileName = new Date().getTime()+'.jpeg';
    const savedFileImage = await savePicture (photo, fileName);
    console.log(savedFileImage.blob);
    
    props.handleImageChange(savedFileImage);
    props.handleClassChange('');
  };
  const takePhotoFromGallery = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 90,
    });
    
    const fileName = new Date().getTime()+'.jpeg';
    const savedFileImage = await savePicture (photo, fileName);
    console.log(savedFileImage.blob);
    
    props.handleImageChange(savedFileImage);
    props.handleClassChange('');
  };


  const handleImageDelete = (filename : string) =>  {
    props.handleImageDelete(filename);
  }

  return (
    <div>
      <IonButton id='choose-photo' className={props.addPhotoClass} >Ajouter des photos</IonButton>
      <IonAlert
        header="Prendre la photo depuis"
        trigger="choose-photo"
        buttons={[
          {
            text: 'Appareil Photo',
            role: 'confirm',
            handler: () => {
                takePhoto()
            },
          },
          {
            text: 'Gallerie',
            role: 'confirm',
            handler: () => {
              takePhotoFromGallery()
            },
          },
        ]}
        onDidDismiss={({ detail }) => console.log(`Dismissed with role: ${detail.role}`)}
      ></IonAlert>
      <IonGrid>
        <IonRow>
        {props.annonce.medias.map((photo, index) => (
        <IonCol size="6" key={index} className="position-relative">
          <IonImg className="photo-list" src={photo.webViewPath} alt={`image-${index}`} />
          <IonIcon
            icon={closeCircleOutline}
            className="close-image" onClick={() => handleImageDelete(photo.fileName)}
          />
        </IonCol>
      ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default PhotoGallery;
