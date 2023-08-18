import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController, IonicSafeString } from "@ionic/angular";
import { NavParams } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

export interface Item{
  id:number;
  title:string;
  value:string;
  modified:number;
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  todos: Observable<any> | undefined;
  constructor(public navCtrl:NavController,public todoService: TodoService,
    public alertController: AlertController,
    public toastCtrl: ToastController) {
     }
    
  ngOnInit() {
  }  
  async showPromptAlert() {
    let alert = this.alertController.create({
      header: 'Vos informations',
      message:   new IonicSafeString(`<img src="${'../assets/images/1.jpg'}" alt="photo" />`),
      inputs: [
        {
          name: 'username',
          placeholder: 'Choisir votre nom'
        },
        {
          name: 'prenom',
          placeholder: 'Choisir votre prenom',
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => { console.log('Confirm Cancel: blah'); } 
        },
        {
          text: 'Enregistrer'
          , 
          handler: () => { console.log('Confirm Okay'); } 
          } 
      ]
    });
    (await alert).present();
  }
}
