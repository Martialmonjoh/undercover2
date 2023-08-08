import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
const DATABASE_FILE_NAME: string ='data.db';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 
  randomNumberCeil1: any;
  randomNumberFloor: number | undefined;
  number!: number;
  sqlite: any;

  private db: SQLiteObject | undefined;
  constructor(private http: HttpClient) {
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
});

  // this.randomNumberCeil1 = Math.floor((Math.random() * 100) + 1);


  }
  // private createDatabaseFile(): void{
  //   this.sqlite.create({
  //     name: 'data.db',
  //     location: 'default'
  //   })
  //   .then((db:SQLiteObject)=> {

  //     db.executeSql('create table danceMoves(name VARCHAR(32))')
  //     .then(() => console.log('Executes SQL'))
  //     .catch((e: any) => console.log(e));

  //   })
  //   .catch((e: any) => console.log(e));
  // }

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
  mots=[];
  readAPI(URL: string) {
    return this.http.get(URL);
  };
}

export class Song {
  id!: number;
  word1!: string;
  word2!: string;
}
