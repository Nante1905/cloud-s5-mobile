import React, { useState } from 'react';
import { IonButton, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import "./photo.css"
interface Photo {
  filepath: string;
  webviewPath: string | undefined;
}

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const newPhotos: Photo[] = [{ filepath: fileName, webviewPath: photo.webPath }, ...photos];
    setPhotos(newPhotos);
  };

  return (
    <div>
      <IonButton onClick={takePhoto}>Ajouter des photos</IonButton>
      <IonGrid>
        <IonRow>
          {photos.map((photo, index) => (
            <IonCol size="6" key={index}>
              <IonImg className="photo-list" src={photo.webviewPath} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default PhotoGallery;
