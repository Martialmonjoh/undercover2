import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  image: any;

  constructor() { }

  ngOnInit() {
  }
  
  async takepicture(){
    const image = await Camera.getPhoto({
      quality:100,
      allowEditing:true,
      resultType:CameraResultType.Uri
    });
    var imageUrl = image.webPath;
  }

  addPhotoToGallery() {
    this.image.addNewToGallery();
  }
}
