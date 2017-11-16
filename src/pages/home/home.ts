import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  image: string;

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  pictureFromCamera() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    //take a photo
    this.takePhoto(options);

  }

  picturefromGallery() {

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true

  }

  this.takePhoto(options);  // this.takePhoto(options).then() (or use a sink -->hier kunnen we later opties toevoegen als we iets meer willen doen met de foto) 
}


 // we create a new function takePhoto()
   // the DOM will simply be updating an image variable so we can see this image and we can make an image
  // when we use base 64 to display the image we have to put some default characters to tell the browser
 // we can say the data type is an image (it is a jetpack) and it is based 64 comma and after this
  // append this to the DOM 
  // we can append the result

  async takePhoto(options: CameraOptions) {
    try{
      console.log("getting photo");
      // take photo and store result in results  // $ Append this to the DOM
      const result = await this.camera.getPicture(options);
      //console.log(result);
      this.image = 'data:image/jpg;base64,'+result 
      
  }
   // now we can catch any error (e) and display in the console
  catch (e) {
  console.error(e);
}


}
}