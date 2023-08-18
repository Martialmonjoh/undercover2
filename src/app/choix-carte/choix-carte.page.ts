import { Component, OnInit } from '@angular/core';
import  { AlertController, IonicSafeString } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
const DATABASE_FILE_NAME: string ='data.db';

@Component({
  selector: 'app-choix-carte',
  templateUrl: './choix-carte.page.html',
  styleUrls: ['./choix-carte.page.scss'],
})
export class ChoixCartePage implements OnInit {
  currentDate!: string;
  randomNumberCeil1: any;
  randomNumberFloor: number | undefined;
  number!: number;
  sqlite: any;

  private db: SQLiteObject | undefined;
  number1!: number;
  constructor(private http: HttpClient,public alertController: AlertController) { 
    const date = new Date();
    this.currentDate = date.toLocaleDateString('fr-FR');
    // let x = Math.floor((Math.random() * 10) + 1);
    this.GameApiUrl = 'http://127.0.0.1:8000/api/words';
    this.readAPI(this.GameApiUrl)
    .subscribe((data: any) => {
    console.log(data);
    this.mots = data;
    // console.log('mots');
    // console.log(this.mots);

    //console.log(this.mots[3]['word1'])

  let size = this.mots.length;
  let index =  Math.floor((Math.random() * size-1)+ 1);
  this.number = index +1;
  this.GameData=this.mots[index]['word1'];
  this.GameData2=this.mots[index]['word2'];

  let index1 = Math.floor((Math.random() * 2)+1);
  this.number1 = index1 ;
  if(index1 == 1){
    this.GameData4=this.mots[index]['word1'];
    this.GameData5=this.mots[index]['word2'];
  }else{
    this.GameData4=this.mots[index]['word2'];
    this.GameData5=this.mots[index]['word1'];
  }
});

}

GameApiUrl = '';
  GameData = {
    mot1: '',
    mot2: '',
    states: ''
  };
  GameData2 = {
    mot1: '',
    mot2: '',
    states: ''
  };
  GameData4 = {
    mot1: '',
    mot2: '',
  };
  GameData5 = {
    mot1: '',
    mot2: '',
  };
  mots=[];
  readAPI(URL: string) {
    return this.http.get(URL);
  };
 
  ngOnInit() {
  }
  async openDialog() { 
    const alert = await this.alertController.create(
    { header: 'Nouvelle paire des mots ?'
    , 
    subHeader: ''
    , 
    message: 'Commencer un nouveau tour avec une autre paire de mots si la paire en cours ne vous plait pas', 
    buttons: [
      { 
        text: 'Annuler', 
        role: 'cancel', 
        cssClass: 'secondary'
        , 
        handler: (blah) => { console.log('Confirm Cancel: blah'); } 
        }, { 
        text: 'Nouvelle Partie'
        , 
        handler: () => { const [routerLink]="['/tabs/tab1']";console.log('Confirm Cancel: blah'); } 
      } 
    ]
    }); 
    await alert.present(); 
    const { role } = await alert.onDidDismiss(); 
    console.log('onDidDismiss resolved with role'
    , role); 
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
          name: 'mot secret',
          value:this.GameData,
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

export class Song {
  id!: number;
  word1!: string;
  word2!: string;
}

